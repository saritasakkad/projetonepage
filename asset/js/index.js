//effet scroll opciter
// window.addEventListener('scroll', addOpacity);
// function addOpacity() {
//   var scrolled = window.pageYOffset || document.body.scrollTop,
//     overlay = document.getElementById('overlay'),
//     fadeStart = 1,
//     fadeUntil = overlay.offsetHeight,
//     overlayOpacity;
//   if (scrolled <= fadeStart) {
//     overlayOpacity = 0;
//   } else if (scrolled <= fadeUntil) {
//     // 1.3 is an arbitrary number, it just accelerates the rate
//     //in which opacity is increased
//     overlayOpacity = (scrolled / fadeUntil) * 1.3;
//   }
//   overlay.style.opacity = overlayOpacity;
// }
//  copier dans div : class="overlay" id="overlay"

//effet scroll opciter 2
$(window).scroll(function(){
$(".cool").css("opacity", 1.7 - $(window).scrollTop() / 250);
});
