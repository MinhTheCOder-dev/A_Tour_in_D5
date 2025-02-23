function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        if (isInViewport(box)) {
            box.classList.add('show');
        }
    });
});
window.addEventListener('scroll', () => {
    const view = document.getElementById('district_info');
    if (!isInViewport(view)) {
        view.classList.remove('show');
    }
});
