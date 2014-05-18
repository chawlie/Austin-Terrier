$('.menuItem').click(function(evt) {
    $('.toggle-topbar').click();
});
// Makes Map Link clickable
$(".maplink").click(function(){
     window.location=$(this).find("a").attr("href"); 
     return false;
});