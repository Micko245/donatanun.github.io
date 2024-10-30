document.addEventListener("DOMContentLoaded", function () {
    const fasilitasGrid = document.querySelector(".fasilitas-grid");
    const fasilitasSingle = document.querySelector(".fasilitas-single");
    const prevButton = document.getElementById("prevFasilitas");
    const nextButton = document.getElementById("nextFasilitas");
  
    let currentPosition = 0;
  
    function changeFasilitas(direction) {
      const cardWidth = fasilitasGrid.querySelector(".fasilitas-card").offsetWidth;
      currentPosition += direction * cardWidth;
      fasilitasGrid.style.transform = `translateX(-${currentPosition}px)`;
    }
  
    prevButton.addEventListener("click", function () {
      if (currentPosition < 0) {
        changeFasilitas(1);
      }
    });
  
    nextButton.addEventListener("click", function () {
      const totalWidth = fasilitasGrid.scrollWidth;
      const visibleWidth = fasilitasGrid.offsetWidth;
  
      if (currentPosition > -(totalWidth - visibleWidth)) {
        changeFasilitas(-1);
      }
    });
  });
  
  