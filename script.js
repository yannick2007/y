window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");
  
    // 2.5 Sekunden voll sichtbar lassen, dann ausblenden
    setTimeout(() => {
      preloader.classList.add("fade-out");
  
      // nach dem Fade-Out Inhalt zeigen (nach 1s Übergang)
      setTimeout(() => {
        preloader.style.display = "none";
        mainContent.classList.remove("hidden");
      }, 1000);
    }, 500); // <- Sichtbarkeit vor Ausblenden
  });
  