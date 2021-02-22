$(".slider").click(function(){
$(".slider").fadeOut(2000, function(){
    $(".slider").css('background-image','url(../img/image@2X.png)');
    $(".slider").fadeIn(8000, function(){
        $(".slider").css('background-image','url(../img/image@1X.png)');
    });
});
})
$(".secondSlider").click(function(){
    $(".secondSlider").fadeOut(2000, function(){
        $(".secondSlider").css('background-image','url(../img/image@1X.png)');
        $(".secondSlider").fadeIn(8000, function(){
            $(".secondSlider").css('background-image','url(../img/image@2X.png)');
        });
    });
    })