$(document).ready(function () {
  //Tab Area
  $('.tab_area .tabs a').on('click', function () {
    console.log('a');
    var idx = $(this).index();
    $(this).parent('.tabs').children('a').removeClass('current');
    $(this).addClass('current');
    $(this).parents('.tab_area').children('.tab_cons').children('li').removeClass('current');
    $(this).parents('.tab_area').children('.tab_cons').children('li').eq(idx).addClass('current');
  });
});
