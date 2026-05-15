const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const videoPoster = document.querySelector("[data-youtube-id]");

if (videoPoster) {
  videoPoster.addEventListener("click", (event) => {
    event.preventDefault();

    const videoId = videoPoster.getAttribute("data-youtube-id");
    const iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = "Show Reel 2025";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    const frame = document.createElement("div");
    frame.className = "video-frame video-frame--home";
    frame.appendChild(iframe);

    videoPoster.replaceWith(frame);
  });
}
