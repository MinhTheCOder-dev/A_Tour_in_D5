window.addEventListener('scroll', function() {
    const buttons = document.querySelectorAll('button');
    const boxes = document.querySelectorAll('.box');

    buttons.forEach(button => {
        const buttonTop = button.getBoundingClientRect().top;
        const buttonHeight = button.offsetHeight;

        if (window.scrollY > buttonTop - window.innerHeight + buttonHeight) {
            button.style.transform = 'scale(1)'; // Pop-up the button
        } else {
            button.style.transform = 'scale(0)'; // Hide the button
        }
    });

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxHeight = box.offsetHeight;

        if (window.scrollY > boxTop - window.innerHeight + boxHeight) {
            box.style.transform = 'scale(1)'; // Pop-up the box
        } else {
            box.style.transform = 'scale(0)'; // Hide the box
        }
    });
});