const body = document.querySelector('body'),
      announcement = 'shopify-section-static-announcement',
      header = 'shopify-section-static-header',
      targetAnnouncement = document.getElementById(announcement),
      targetHeader = document.getElementById(header);
var bodyStyle = window.getComputedStyle(body);

// Resizeobserver header and announcement bar
const observer = new ResizeObserver((entries) => {

  entries.forEach((entry) => {
    const target = entry.target
    const rect = entry.contentRect;
    body.style.setProperty(`--${target.id}-height`, `${rect.height}px`);
  });
});
observer.observe(targetAnnouncement);
observer.observe(targetHeader);


// Scroll position control
$('a[href^="#"]').click(function(e){
  var announcementHeight = $('#shopify-section-static-announcement').outerHeight();
  var headerHeight = $('#shopify-section-static-header').outerHeight();

  var speed = 400;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - headerHeight - announcementHeight;
	
	$.when(
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing"),
        e.preventDefault(),
    ).done(function() {
            var diff = target.offset().top;
            if (diff === position) {
            } else {
                $("html, body").animate({
                    scrollTop: diff
                }, 10, "swing");
            }
    });
  //$("html, body").animate({scrollTop:position}, speed, "swing");
  //return false;
	
	
  console.log(taget);
  console.log(headerHeight);
  console.log(announcementHeight);
});

// $(function () {
//     var headerHeight = bodyStyle.getPropertyValue(`--${header}-height`);
//     var animeSpeed = 500;
//     var urlHash = location.hash; //URLのハッシュタグを取得
//     if (urlHash) { //ハッシュタグが有る場合
//         $('body,html').scrollTop(0);
//         setTimeout(function () { //無くてもいいが有ると動作が安定する
//             var target = $(urlHash);
//             var position = target.offset().top;
//             $("body,html").stop().animate({
//                 scrollTop: position
//             }, animeSpeed);
//         }, 0);
//     }
// });
