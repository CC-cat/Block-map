$(function(){
  btnListShow();
  btnMarkShow();

  // $(".search-go").on("click",function(){
  //    findName();
  // });

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

// function findName(){
//     var localName = $("#zoom-to-area-text").val;
//
//     if (localName.length > 0) {
//         for (let i in this.locations) {
//             if (i.title === localName) {
//                 hideListings(title);
//             }
//         }
//
//     }
// }
//
// function hideListings(title) {
//     console.log(1);
//     console.log(markers);
//     for (var i of markers) {
//         i.setMap(null);
//     }
// };
