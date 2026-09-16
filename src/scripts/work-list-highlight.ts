type Box = { x: number; y: number; w: number; h: number };

const EASE = 0.22;

let list: HTMLElement | null = null;
let column: HTMLElement | null = null;
let scrollport: HTMLElement | null = null;
let highlight: HTMLElement | null = null;
let activeRow: HTMLElement | null = null;
let activeGridRow: HTMLElement | null = null;
let visible = false;
let raf = 0;
let current: Box = { x: 0, y: 0, w: 0, h: 0 };
let target: Box = { x: 0, y: 0, w: 0, h: 0 };
let listenersBound = false;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function refreshEls() {
  list = document.querySelector("[data-work-list]");
  scrollport = document.querySelector("[data-list-scroll]");
  column = document.querySelector(".page--work .list-column");
  highlight = document.querySelector("[data-list-highlight]");
}

function apply() {
  if (!highlight) return;
  highlight.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
  highlight.style.width = `${Math.max(current.w, 0)}px`;
  highlight.style.height = `${Math.max(current.h, 0)}px`;
}

function tick() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const t = reduced ? 1 : EASE;
  current.x = lerp(current.x, target.x, t);
  current.y = lerp(current.y, target.y, t);
  current.w = lerp(current.w, target.w, t);
  current.h = lerp(current.h, target.h, t);
  apply();

  const done =
    Math.abs(current.x - target.x) < 0.25 &&
    Math.abs(current.y - target.y) < 0.25 &&
    Math.abs(current.w - target.w) < 0.25 &&
    Math.abs(current.h - target.h) < 0.25;

  if (!done) {
    raf = requestAnimationFrame(tick);
  } else {
    current = { ...target };
    apply();
    raf = 0;
  }
}

function measureRow(row: HTMLElement): Box | null {
  refreshEls();
  if (!column) return null;
  const columnRect = column.getBoundingClientRect();
  const rowRect = row.getBoundingClientRect();
  return {
    x: rowRect.left - columnRect.left,
    y: rowRect.top - columnRect.top,
    w: rowRect.width,
    h: rowRect.height,
  };
}

function moveTo(row: HTMLElement, instant = false) {
  refreshEls();
  if (!list || !highlight || !column) return;
  if (list.dataset.view === "grid") {
    hide();
    return;
  }

  const box = measureRow(row);
  if (!box) return;

  activeRow = row;
  target = box;

  if (!visible || instant) {
    current = { ...target };
    apply();
    visible = true;
  }
  highlight.style.opacity = "1";

  if (!raf) raf = requestAnimationFrame(tick);
}

function hide() {
  visible = false;
  activeRow = null;
  if (highlight) highlight.style.opacity = "0";
  if (raf) {
    cancelAnimationFrame(raf);
    raf = 0;
  }
}

function stopGridPreviewVideo(row: HTMLElement | null) {
  if (!row) return;
  row.removeAttribute("data-preview-playing");
  const video = row.querySelector<HTMLVideoElement>(".row-preview-video");
  if (!video) return;
  video.pause();
  try {
    video.currentTime = 0;
  } catch {
    /* ignore seek errors before metadata */
  }
}

function playGridPreviewVideo(row: HTMLElement) {
  const video = row.querySelector<HTMLVideoElement>(".row-preview-video");
  if (!video) return;
  row.setAttribute("data-preview-playing", "true");

  const tryPlay = () => {
    if (row.getAttribute("data-preview-playing") !== "true") return;
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    void video.play().catch(() => {});
  };

  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    tryPlay();
    return;
  }

  video.addEventListener("loadeddata", tryPlay, { once: true });
  if (video.readyState === HTMLMediaElement.HAVE_NOTHING) {
    video.load();
  }
}

function clearGridTilt(row: HTMLElement | null = activeGridRow) {
  if (!row) return;
  stopGridPreviewVideo(row);
  row.style.removeProperty("--tilt-x");
  row.style.removeProperty("--tilt-y");
  row.style.removeProperty("--tilt-lift");
  row.removeAttribute("data-tilt-active");
  if (activeGridRow === row) activeGridRow = null;
}

function onPointerMove(event: PointerEvent) {
  const el = event.target;
  if (!(el instanceof Element)) {
    clearGridTilt();
    return;
  }

  const row = el.closest(".row");
  refreshEls();
  if (!(row instanceof HTMLElement) || !list?.contains(row) || list.dataset.view !== "grid") {
    clearGridTilt();
    return;
  }

  if (activeGridRow && activeGridRow !== row) clearGridTilt(activeGridRow);
  const isNewRow = activeGridRow !== row;
  activeGridRow = row;

  if (isNewRow) playGridPreviewVideo(row);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const rect = row.getBoundingClientRect();
  const px = (event.clientX - rect.left) / rect.width - 0.5;
  const py = (event.clientY - rect.top) / rect.height - 0.5;
  const rotateX = py * -8;
  const rotateY = px * 8;

  row.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
  row.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
  row.setAttribute("data-tilt-active", "true");
}

function onPointerOver(event: Event) {
  const el = event.target;
  if (!(el instanceof Element)) return;
  const row = el.closest(".row");
  if (!(row instanceof HTMLElement)) return;
  refreshEls();
  if (!list?.contains(row)) return;
  moveTo(row);
}

function onListLeave(event: Event) {
  const related = (event as PointerEvent).relatedTarget;
  refreshEls();
  if (!list) return;
  if (related instanceof Node && list.contains(related)) return;
  hide();
  clearGridTilt();
}

function onScroll() {
  if (!visible || !activeRow) return;
  // Keep glass aligned while the list scrolls under a fixed highlight layer
  moveTo(activeRow, true);
}

function bindListLeave() {
  refreshEls();
  if (!list) return;
  list.removeEventListener("pointerleave", onListLeave);
  list.addEventListener("pointerleave", onListLeave);
}

function bindScroll() {
  refreshEls();
  if (!scrollport) return;
  scrollport.removeEventListener("scroll", onScroll);
  scrollport.addEventListener("scroll", onScroll, { passive: true });
}

function bindGlobal() {
  if (listenersBound) return;
  listenersBound = true;
  document.addEventListener("pointerover", onPointerOver);
  document.addEventListener("pointermove", onPointerMove);
}

function onPageLoad() {
  refreshEls();
  hide();
  clearGridTilt();
  bindGlobal();
  bindListLeave();
  bindScroll();
}

function onViewChange(event: Event) {
  const view = (event as CustomEvent<{ view?: string }>).detail?.view;
  if (view !== "grid") clearGridTilt();
}

document.addEventListener("astro:page-load", onPageLoad);
window.addEventListener("work-view-change", onViewChange);
onPageLoad();
