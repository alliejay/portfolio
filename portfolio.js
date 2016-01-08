var assignments = [
  {
    name: "surfpaddle",
    url: "http://alliejay.github.io/html-intro-surf-paddle/",
    title: "Surf & Paddle Assignment: Week 2",
    mainImg: "portfolio/surfpaddle.png",
    goal: "Recreate the Surf & Paddle layout based on <a href='portfolio/surfpaddleEx.png' target='_blank'>this screenshot</a> using HTML & CSS.  Make the site responsive in order to resemble <a href='portfolio/surfpaddleRes.pdf' target='_blank'>this screenshot</a> at 320px.",
    challenge: "Put a blue overlay over the images which will disappear when hovering over it (aside from the main image).",
    personalExp: "I kept getting a lot of white space to the right of the four images at the bottom of the page.  It took some time and research to find a solution that aligned these images and the text over them perfectly."
  },
  {
    name: "peralta",
    url: "http://alliejay.github.io/peralta/",
    title: "Powell Peralta Assignment: Week 2",
    mainImg: "portfolio/peralta.png",
    goal: "Recreate the Powell Peralta layout based on <a href='portfolio/peraltaEx.jpg' target='_blank'>this screenshot</a> using HTML & CSS. The site should be fully responsive to varying screen sizes.",
    challenge: "Utilize form validation & add animation into the site where appropriate.",
    personalExp: "I spend a long time learning how to use flex boxes for this assignment, only to realize they weren't rendering very well in browsers other than Chrome.  This assignment had some great layout challenges and was an excellent learning tool from that perspective."
  },
  {
    name: "timeToRead",
    url: "http://alliejay.github.io/time-to-read/",
    title: "Time to Read: Week 3",
    mainImg: "portfolio/timeToRead.png",
    goal: "Using javascript, calculate the amount of time it would take the average reader (230 word/minute) to read a particular text and display the 'time to read' on the page.",
    challenge: "Write a function that would allow a programmer to adjust the words per minute rate in the console.  My function is 'howLong()' with the new rate being the parameter.",
    personalExp: "I spend a lot of time solving a problem I was having where some white space was being counted as characters. I challenged myself to add a button to the page as well that allows the adjustment of the words per minute rate."
  },
  {
    name: "githubRecreation",
    url: "http://alliejay.github.io/github-recreation/",
    title: "GitHub Recreation: Week 3",
    mainImg: "portfolio/github.png",
    goal: "Recreate your github profile layout including the Repositories & Public Activity tabs using GitHub JSON data to populate the pages.",
    challenge: "Learn how to utilize the <a href='http://momentjs.com/' target='_blank'>Moment.js</a> library without any instruction.",
    personalExp: "This assignment taught me the value of using templates and JSON data to write more efficient code. It also gave me a better understanding of libraries in general and how they can be useful."
  },
  {
    name: "photoAlbum",
    url: "http://alliejay.github.io/jQuery-photo-albums/",
    title: "Photo Albums: Week 4",
    mainImg: "portfolio/photoAlbum.png",
    goal: "Create a site to display 6 photo albums that each hold 3 photos. The pages can only be populated via JSON data. Each page had a <a href='https://github.com/TIY-Charleston-Front-End-Oct2015/assignments/blob/master/jQuery-photo-albums/assets/photo-album.png' target='_blank'>predetermined layout</a> laid out by the instructor.",
    challenge: "When a photo is clicked, a larger version of the image should popup on top of the page.",
    personalExp: "I felt much more confident in my understanding and use of templates once I completed this assignment. The popup view of each image was a challenge, but with some time and research I did figure it out."
  },
  {
    name: "toDoList",
    url: "http://alliejay.github.io/crud-todo/",
    title: "To Do List: Week 4",
    mainImg: "portfolio/toDo.png",
    goal: "Create a To Do List that allows one to add tasks, mark tasks as complete and delete all completed tasks.  Double clicking on a task should allow you to edit it.",
    challenge: "Add the ability to filter between all tasks, tasks that have been marked completed and those that are yet to be completed.",
    personalExp: "This assignment pushed my javascript knowledge and required me to write clean, efficient functions and strategically use click events. I also expanded my <a href='http://jquery.com/' target='_blank'>jQuery</a> knowledge over the course of completing the assignment."
  },
  {
    name: "starWars",
    url: "http://alliejay.github.io/constructor-game-star-wars/",
    title: "Create A Game: Week 5",
    mainImg: "portfolio/starWars.png",
    goal: "Use constructors to create a game. The content of the game is open ended.",
    challenge: "Learn how to efficiently display your game on the browser.  The game cannot be console based.",
    personalExp: "I had the most fun with this assignment. I created a Star Wars game where you to travel to different planets/moons in order to save the galaxy. Displaying the game in the browser in an interseting way was a challenge, so I created each of the planets in <a href='https://www.gimp.org/' target='_blank'>GIMP</a> to add some fun to the screen. It may not display properly in some resolutions & the browser will have to be minimized in those cases."
  },
  {
    name: "chromeExtension",
    url: "https://github.com/alliejay/chrome-extension",
    title: "Chrome Extension: Week 6",
    mainImg: "portfolio/chrome.png",
    goal: "Build a Chrome extension with little to no instruction.",
    challenge: "Incorporate any API - open ended.",
    personalExp: "It was an enjoyable challenge teaching myself how chrome extensions are built. I had minimal experience with API's, so that was a learning process as well. I find my extension rather useful, and I still use it on a regular basis."
  },
  {
    name: "crimes",
    url: "https://github.com/TIYCrime/Crimes",
    title: "Group Project: Week 6",
    mainImg: "portfolio/crimes.png",
    goal: "Open ended group assignment. My group gathered, displayed, & filtered crime data for every U.S. state over the past 50+ years.",
    challenge: "Each group consisted of both front & back end (Java) students - the first time we had ever collaborated with one another.",
    personalExp: "This was our first encounter using Git in a group environment & we spent more time than we liked fixing merge conflicts. This was a valuable lesson in best practices for code organization and team communication."
  },
  {
    name: "imbd-app",
    url:  "https://github.com/alliejay/imbd-holiday-movies",
    title: "IMBD Movie App: Week 7",
    mainImg: "portfolio/imbd-app.png",
    goal: "Create an IMBD-like application that lets you manage a list of movies.",
    challenge: "Create the application using <a href='http://backbonejs.org/' target='_blank'>Backbone.js</a>.",
    personalExp: "While this app is essentially just a CRUD application, it was our first project requiring the use of a JavaScript MVC framework. It took additional time to understand these new principles."
  },
  {
    name: "pams",
    url:  "https://github.com/PAMS-2015/PAMS-2015",
    title: "PAMS: Final Project",
    mainImg: "portfolio/pams.png",
    goal: "Final project which is presented on Iron Yard's Demo Day. PAMS - Product Authentication & Management System.",
    challenge: "PAMS ensures the authenticity of brand name products thereby protecting brands, retailers and consumers alike.",
    personalExp: "This was my favorite part of my Iron Yard experience overall.  To have the opportunity to build a fully functioning app from scratch is a wonderfully unique experience.  I learned so much, and discovered how far I had come from my first week at The Iron Yard. I can now say that I am a Front End Engineer with the ability to build applications from the ground up - what could be better than that?"
  }

];
