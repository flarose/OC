
        const OUT_OPACITY = 1.0;
        const OVER_OPACITY = 0.3;
 
        $(function() {
            $("div#miniGallery img").css("opacity", OUT_OPACITY)
                .hover(
                    function () {
                        $(this).animate({opacity:OVER_OPACITY});
                    },
                    function () {
                        $(this).animate({opacity:OUT_OPACITY});
                    }
                );
            });
