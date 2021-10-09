    $(".nav a").on("click", function () {
var position =
   $(this).parent() .position();
    var width = $(this).parent().width();
   $(".nav a").removeClass("aktif");
   $(this).addClass("aktif");
   $(".nav .slide").css({ left: +position.left,
     opacity: 1,
     width: width,
});
});
      var currentWidth =
$(".nav").find("li:nth-child(2) a").parent("li").width(); 
var current = $("li:nth-child(2) a").position();
$(".nav .slide").css({ left: +current.left, width: currentWidth,
});