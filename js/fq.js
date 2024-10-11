const faqItems = document.querySelectorAll(".items");

faqItems.forEach((items) => {
  items.addEventListener("click", () => {
    items.classList.toggle("active");
  });
});