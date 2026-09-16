function muteVideo(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.setAttribute("muted", "");
}

function muteAllVideos() {
  document.querySelectorAll("video").forEach((node) => {
    if (node instanceof HTMLVideoElement) muteVideo(node);
  });
}

function bindVideoMuteGuards() {
  document.querySelectorAll("video").forEach((node) => {
    if (!(node instanceof HTMLVideoElement)) return;
    if (node.dataset.muteBound === "true") return;
    node.dataset.muteBound = "true";

    muteVideo(node);

    node.addEventListener("play", () => muteVideo(node));
    node.addEventListener("volumechange", () => {
      if (!node.muted || node.volume > 0) muteVideo(node);
    });
  });
}

function initMuteAllVideos() {
  muteAllVideos();
  bindVideoMuteGuards();
}

document.addEventListener("astro:page-load", initMuteAllVideos);
initMuteAllVideos();
