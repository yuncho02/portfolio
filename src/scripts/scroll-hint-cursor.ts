const IDLE_MS = 3000;

let timer = 0;
let active = false;
let pendingShow = false;
let bound = false;
let hasPointer = false;
let cursorEl: HTMLElement | null = null;
let pointerX = 0;
let pointerY = 0;
let raf = 0;

function canHint(): boolean {
  if (document.hidden) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.matchMedia("(pointer: coarse)").matches) return false;
  if (window.matchMedia("(max-width: 900px)").matches) return false;
  // Work homepage only — not About, Art, or case studies
  if (!document.querySelector(".page--work")) return false;
  return true;
}

function isScrollable(): boolean {
  const list = document.querySelector<HTMLElement>("[data-list-scroll]");
  const workPage = document.querySelector<HTMLElement>(".page--work");
  const workView =
    workPage?.dataset.view ?? document.documentElement.dataset.workView ?? "list";

  if (workPage && list && workView !== "grid") {
    return list.scrollHeight > list.clientHeight + 8;
  }

  return document.documentElement.scrollHeight > document.documentElement.clientHeight + 8;
}

function ensureCursor() {
  if (cursorEl?.isConnected) return cursorEl;
  cursorEl = document.createElement("div");
  cursorEl.className = "scroll-hint-cursor";
  cursorEl.setAttribute("aria-hidden", "true");
  cursorEl.innerHTML = `
    <svg class="scroll-hint-cursor__icon" viewBox="0 0 24 36" width="24" height="36" fill="none">
      <rect x="1.25" y="1.25" width="21.5" height="33.5" rx="10.75" stroke="currentColor" stroke-width="1.5"/>
      <rect class="scroll-hint-cursor__wheel" x="10.25" y="7" width="3.5" height="7" rx="1.75" fill="currentColor"/>
    </svg>
  `;
  document.body.appendChild(cursorEl);
  return cursorEl;
}

function moveCursor() {
  if (!cursorEl || !active) {
    raf = 0;
    return;
  }
  cursorEl.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
  raf = requestAnimationFrame(moveCursor);
}

function showHint() {
  if (active || !canHint() || !isScrollable()) {
    pendingShow = false;
    return;
  }

  // Never blank the system cursor until we know where to draw the custom one
  if (!hasPointer) {
    pendingShow = true;
    return;
  }

  pendingShow = false;
  active = true;
  const el = ensureCursor();
  el.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
  el.dataset.visible = "true";
  document.documentElement.classList.add("scroll-hint-active");
  if (!raf) raf = requestAnimationFrame(moveCursor);
}

function hideHint() {
  pendingShow = false;
  active = false;
  if (cursorEl) cursorEl.dataset.visible = "false";
  document.documentElement.classList.remove("scroll-hint-active");
  if (raf) {
    cancelAnimationFrame(raf);
    raf = 0;
  }
}

function clearTimer() {
  if (timer) {
    window.clearTimeout(timer);
    timer = 0;
  }
}

function onUserScroll() {
  clearTimer();
  hideHint();
}

function onPointerMove(event: PointerEvent) {
  pointerX = event.clientX;
  pointerY = event.clientY;
  hasPointer = true;

  if (pendingShow) showHint();
  else if (active && !raf) raf = requestAnimationFrame(moveCursor);
}

function startIdleTimer() {
  clearTimer();
  hideHint();
  if (!canHint() || !isScrollable()) return;

  timer = window.setTimeout(() => {
    timer = 0;
    if (!canHint() || !isScrollable()) return;
    showHint();
  }, IDLE_MS);
}

function onVisibilityChange() {
  if (document.hidden) {
    clearTimer();
    hideHint();
    return;
  }
  // Fresh 3s after returning to the tab — don't fire from a background timer
  startIdleTimer();
}

function bindOnce() {
  if (bound) return;
  bound = true;

  window.addEventListener("wheel", onUserScroll, { passive: true });
  window.addEventListener("touchmove", onUserScroll, { passive: true });
  window.addEventListener("scroll", onUserScroll, { passive: true, capture: true });
  window.addEventListener("keydown", (event) => {
    const keys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " ", "Spacebar"];
    if (keys.includes(event.key)) onUserScroll();
  });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange);
}

function initScrollHintCursor() {
  bindOnce();
  startIdleTimer();
}

document.addEventListener("astro:page-load", initScrollHintCursor);
document.addEventListener("astro:before-swap", () => {
  clearTimer();
  hideHint();
});
window.addEventListener("work-view-change", () => {
  startIdleTimer();
});

initScrollHintCursor();
