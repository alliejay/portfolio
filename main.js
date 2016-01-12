$(document).ready(function () {
  page.init();
});

var page = {

  init: function () {
    page.initStyling();
    page.initEvents();
  },

  initStyling: function () {
    page.loadPortfolio();
    page.likePost();
  },

  initEvents: function () {
    page.navLinks();
    page.spanLinks();
  },

  navLinks: function() {
    $('nav').on('click', 'li', function(event) {
      event.preventDefault();
      var selectedSection = "." + $(this).attr('rel');
      $(selectedSection).removeClass('hidden');
      $(selectedSection).siblings('article').addClass('hidden');
    });
  },

  spanLinks: function() {
    $('.content').on('click', 'span', function (event) {
      event.preventDefault();
      var selectedSpanSection = "." + $(this).attr('rel');
      console.log(selectedSpanSection);
      $(selectedSpanSection).removeClass('hidden');
      $(selectedSpanSection).siblings('article').addClass('hidden');
    });
  },

  loadPortfolio: function(){
    var pfHTML ="";
    var portfolioTemplate = _.template($('#portfolioTmpl').html());
    _.each(assignments, function(el, idx, arr) {
      $('#portfolioList').prepend(portfolioTemplate(el));
    });
  },

  likePost: function(){
    var likes = 0;
    $('.blogPost').on('click', '.likeIt', function(event){
      if($('span').hasClass('liked')) {
        console.log("Already liked bruh");
      } else {
        $('span').addClass('liked');
        likes++;
        $('.likes').html(
          "<img src='icons/heart.png' class='likeIt'> <span>" + likes + " liked this</span>"
        );
      }
    });
  }

};
