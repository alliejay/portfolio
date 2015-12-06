var templates = {
  pfAssignments: [
    '<li id="pfLI">',
        '<a href="<%= url =>" target="_blank">',
        '<p class="title">',
          '<%= title =>',
        '</p>',
        '<img class="screenshot" src="<%= mainImg =>" />',
        '</a>',
        '<p class="desc"><br>',
          '<b class="subHead">GOAL</b>: <%= goal =>',
          '<br>',
          '<b class="subHead">CHALLENGES</b>: <%= challenge =>',
          '<br>',
          '<b class="subHead">PERSONAL EXPERIENCE</b>: <%= personalExp =>',
        '</p>',
      '</li>'
  ]
};
