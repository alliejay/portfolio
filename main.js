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

};
