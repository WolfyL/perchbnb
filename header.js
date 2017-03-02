$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
      $("#searchbar").fadeIn();
    }
    else {
      $("#searchbar").hide();
    }
});
