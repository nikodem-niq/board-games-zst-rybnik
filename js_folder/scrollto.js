let last_clicked = false;

$(".scrollnav1").click(function(){
  $("html, body").animate({ scrollTop: $(".karciane").position().top-55 }, 2000);
  let last_clicked = true;
});

$(".scrollnav2").click(function(){
  $("html, body").animate({ scrollTop: $(".rpg").position().top-55 }, 2000);
  let last_clicked = true;
});

$(".scrollnav3").click(function(){
  $("html, body").animate({ scrollTop: $(".strategiczne").position().top-55 }, 2000);
  let last_clicked = true;
});

$(".scrollnav4").click(function(){
  $("html, body").animate({ scrollTop: $(".ekonomiczne").position().top-55 }, 2000);
  let last_clicked = true;
});

//  TO TOP

$(".to-top").click(function(){
  $("html, body").animate({ scrollTop: $(".top-of-top").position().top-200 }, 2000);
  let last_clicked = true;
});