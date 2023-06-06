$(function () {
    /**
     * ResponsiveTabs
     */
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true   // 100% fit in a container
    });
    /**
     * swipe box js
     */
    $(".swipebox").swipebox();

    /**
     * smooth-scrolling-of-move-up
     * @type {
     * {
     * easingType: string,
     * containerHoverID: string,
     * scrollSpeed: number,
     * containerID: string
     * }
     * }
     */
    var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 1200,
        easingType: 'linear'
    };
    $().UItoTop({ easingType: 'easeOutQuart' });
});