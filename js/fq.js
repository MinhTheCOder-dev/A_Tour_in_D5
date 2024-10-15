document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".more_specific");

  faqItems.forEach((item) => {
      item.addEventListener("click", () => {
          const day = item.querySelector('.day');
          if (day.style.maxHeight) {
              day.style.maxHeight = null; 
          } else {
              day.style.maxHeight = day.scrollHeight + "px";
          }
          item.classList.toggle("active");
      });
  });
});