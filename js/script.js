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
$(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();

    $('.box').each(function() {
        var boxTop = $(this).offset().top;
        var boxHeight = $(this).height();

        if (windowTop > (boxTop + boxHeight - windowHeight)) {
            $(this).addClass('show');
        }
    });
});
