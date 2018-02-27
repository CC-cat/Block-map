$(function(){
  btnListShow();
  btnMarkShow();

});


function btnListShow(){
  $(".btn-list-box").on("click", function(){

    if ($(".btn-list").hasClass("list-open")) {
      $(".btn-list").removeClass("list-open").addClass("list-close");
      $(".options-box").animate({left:"-340px"});

    } else if($(".btn-list").hasClass("list-close")) {
      $(".btn-list").removeClass("list-close").addClass("list-open");
      $(".options-box").animate({left:"30px"});

    }
  });
}


function btnMarkShow(){
  $(".btn-contorl input").on("click", function(){
    var index = $(this).index();
    $(".btn-contorl input").removeClass("currentBtn");
    $(this).addClass("currentBtn");
  });
}
