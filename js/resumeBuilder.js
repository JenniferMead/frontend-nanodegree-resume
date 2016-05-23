//Objects used to hold my information

var bio = {
  "name": "Jennifer Mead",
  "role": "Front-end web-developer",
    "contacts": {
    "mobile": "267-555-5555",
    "email": "myemail@gmail.com",
    "gitHubUserName": "JenniferMead",
    "location": "Napa, Ca"
  },
  "WelcomeMessage": "Welcome to my interactive resume! I'm an aspiring web developer with a passion for coding and wine.",
  "skills": ["HTML", "CSS", "Javascript", "Design"],
  "bioPic": ["images/profile.jpg"],
  "display": function() {
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
    $("#header").prepend(formattedMsg);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $('#header').prepend(formattedPic);
    $("#topContacts").append(HTMLcontactStart);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
  	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.gitHubUserName);
    $("#topContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedGitHub);
  	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
    $("#header").append(HTMLskillsStart);
    for(var skill in bio.skills) {
  		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
  		$("#skills").append(formattedSkill);
    }
  }
};

var education = {
  "schools": [{
    "name": "UC Davis",
    "location": "Davis, Ca",
    "degree": "Masters",
    "major": ["Immunology"],
    "dates": "2012-2014",
    "url": "https://www.ucdavis.edu/"
  },
  {
    "name": "Moravian",
    "location": "Bethlehem, Pa",
    "degree": "Bachelors",
    "major": ["Biology"],
    "dates": "2007-2011",
    "url": "http://www.moravian.edu/"
  }
  ],
  "onlineCourses":[{
    "title": "Front-End Web-Developer Nanodegree",
    "school": "Udacity",
    "dates": "02/2016 - current",
    "url": "https://www.udacity.com/"
  }
  ],
  "display": function (){
    for(school in education.schools){
      $("#education").append(HTMLschoolStart);
      var formattedSchool = HTMLschoolName.replace("#",education.schools[school].url ).replace("%data%", education.schools[school].name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedSchool + formattedLocation + formattedDegree + formattedDates + formattedMajor);
    }
    for(course in education.onlineCourses){
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedOnlineTitle = HTMLonlineTitle.replace("#",education.onlineCourses[course].url).replace("%data%", education.onlineCourses[course].title);
      var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(formattedOnlineSchoolTitle);
      $(".education-entry:last").append(formattedOnlineDates);
    }
  }
};

var work = {
  "jobs": [{
    "employer": "Alpha Omega",
    "title": "Tasting Room Associate",
    "location": "Napa, Ca",
    "dates": "03/2016 - in progress",
    "description": "I sell wine in a tasting room"
  },
  {
    "employer": "Rack and Riddle",
    "title": "Harvest Lab Intern",
    "location": "Healdsburg, Ca",
    "dates": "08/2016 - 12/2016",
    "description": "I worked in a wine lab helping to make sure the wine fermented properly"
  }
  ],
  "display": function (){
    for(job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
    }
  }
};

var projects = {
  "projects": [{
    "title": "Wine Blog",
    "dates": "05/2016 - in progress",
    "description": "A blog which reviews and rates cheap wines to help people determine whether they are worth buying",
    "images": ["images/wine.jpg"]
  },
  {
    "title": "My Portfolio",
    "dates": "04/2016",
    "description": "A portfolio of my projects",
    "images": ["images/logo.jpg"]
  }
  ],
  "display": function() {
    for(project in projects.projects){
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates)
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
      $(".project-entry:last").append(formattedDescription);
      if(projects.projects[project].images.length > 0) {
        for (image in projects.projects[project].images) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
};

//Code used to call the methods to display all of my information on the resume

bio.display();
projects.display();
work.display();
education.display();

//Code used to internationalize my name

$("#main").append(internationalizeButton);
var inName = function(name){
  var internationalName = [];
  internationalName = name.split(" ");
  internationalName[0] = internationalName[0].slice(0,1).toUpperCase() + internationalName[0].slice(1).toLowerCase();
  internationalName[1] = internationalName[1].toUpperCase();
  return internationalName.join(" ");
};
inName(bio.name);

//Code used to allow googleMaps to show my locations

$("#mapDiv").append(googleMap);

//Do I need this? It just shows were I clicked on the page.

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

//Do I need this? This just brings up my locations I have worked in the console.

function locationizer(work_obj) {
var locationArray = [];
for (job in work_obj.jobs){
  var newLocation = work_obj.jobs[job].location;
  locationArray.push(newLocation);
}
  return locationArray;
}
console.log(locationizer(work));
