document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".items");
    
    faqItems.forEach((item) => {
        item.addEventListener("click", () => {
            const answer = item.querySelector('.answer');
            
            // Close all other answers
            document.querySelectorAll('.items').forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current answer
            item.classList.toggle('active');
        });
    });
});