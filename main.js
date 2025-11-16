window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const main = document.getElementById("main-content");
  const sound = document.getElementById("flame-sound");
  const bgMusic = document.getElementById("bg-music");
  const chime = document.getElementById("button-chime");
  const button = document.querySelector("#main-content button");

  sound.play().catch((err) => {
    console.warn("Autoplay blocked:", err);
  });

  setTimeout(() => {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
      document.body.style.overflow = "auto";
      main.style.display = "block";
    }, 1000);
  }, 2000);

  document.addEventListener(
    "click",
    () => {
      if (flameSound.paused) flameSound.play();
      if (bgMusic.paused) bgMusic.play();
    },
    { once: true }
  );

  button.addEventListener("click", () => {
    chime.currentTime = 0;
    chime.play().catch((err) => console.warn("Chime blocked:", err));
  });
});
