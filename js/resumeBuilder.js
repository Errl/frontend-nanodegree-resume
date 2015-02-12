var bio = {
    "name": "Hanane Moshe",
    "role": "Developer",
    "welcomemessage": "Welcome to My Resume",
    "contacts": {
        "mobile": "646 201 0296",
        "email": "Hananemo@gmail.com",
        "github": "errl",
        "twitter": "twitter/example",
        "location": "Jersey City, NJ"
    },
    "biopic": "images/fry.jpg",
    "skills": ["Javascript", "HTML", "C#"]
}

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
    $("#topContacts:last").append(formattedEmail);
    $("#footerContacts:last").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
    $("#topContacts:last").append(formattedGithub);
    $("#footerContacts:last").append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
    $("#topContacts:last").append(formattedTwitter);
    $("#footerContacts:last").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
    $("#topContacts:last").append(formattedLocation);
    $("#footerContacts:last").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic)
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomemessage)
    $("#header").append(formattedWelcomeMessage);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skills in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skills]);
            $("#skills").append(formattedSkill);
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "Elite Travel Guru",
            "title": "President & Co-Founder",
            "location": "Manhattan, NY",
            "dates": "2013 - Future",
            "description": "Lorem ipsum dolor sit amet, volumus sententiae eu sit, per omnesque sapientem ex. Stet putant commodo ne sit, usu numquam theophrastus cu. Reque veniam suscipit eum ut. In qui tritani scripserit. Ut aeterno omittam inciderint nec. At pri ipsum saperet. Harum vulputate ei vix, et tale eripuit eos, amet nusquam vituperatoribus id vix. Dictas accusam in qui, volutpat mediocritatem in vis. Propriae praesent vel no, vis in euismod atomorum argumentum, feugait corrumpit sententiae ad nec. Et his nobis graecis vituperatoribus, mei cu nibh duis scaevola.",
        },

        {
            "employer": "Discounted Flight Guru",
            "title": "President & Founder",
            "location": "Miami, FL",
            "dates": "2010 - Future",
            "description": "Harum vulputate ei vix, et tale eripuit eos, amet nusquam vituperatoribus id vix. Dictas accusam in qui, volutpat mediocritatem in vis. Propriae praesent vel no, vis in euismod atomorum argumentum, feugait corrumpit sententiae ad nec. Et his nobis graecis vituperatoribus, mei cu nibh duis scaevola.",
        }
    ]
}

work.display = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }
}

var projects = {
    "projects": [
        {
            "title": "Elite Travel Guru Website",
            "dates": "2012",
            "description": "Autem sensibus inimicus no eam. Dicat possit delicata cu eam, ea autem denique ius, fastidii appellantur interpretaris ne quo. Et graeci tractatos suscipiantur eum, pro ne diam cetero dolorum. Scripta voluptaria scribentur ea cum, vel cu noster voluptua. Ea facete habemus expetendis nec, his posse quaerendum id.Harum vulputate ei vix, et tale eripuit eos, amet nusquam vituperatoribus id vix. Dictas accusam in qui, volutpat mediocritatem in vis. Propriae praesent vel no, vis in euismod atomorum argumentum, feugait corrumpit sententiae ad nec. Et his nobis graecis vituperatoribus, mei cu nibh duis scaevola. ",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },

        {
            "title": "Elite Travel Guru Website",
            "dates": "2012",
            "description": "Iudico theophrastus concludaturque mea eu, meis vidit ullamcorper te his, quidam vidisse albucius pro et. In per dico movet postea. His adhuc deleniti tacimates te. Duo ei nihil delenit.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
}

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDate);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImages)

            }
        }
    }
}

var education = {
    "schools": [
        {
            "name": "University at Buffalo",
            "location": "Buffalo, New York",
            "degree": "BA",
            "majors": ["CS"],
            "dates": "2003",
            "url": "http://www.example.com"
        }
    ],
    "onlinecourses": [
        {
            "title": "Front-end Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/nd001"
        }
    ]
}

education.display = function () {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var fromattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(fromattedSchoolName);

        var fromattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(fromattedSchoolDates);

        var fromattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(fromattedSchoolLocation);

        var fromattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last a").append(fromattedSchoolDegree);

        if (education.schools[school].majors.length > 0) {
            for (major in education.schools[school].majors) {
                var fromattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(fromattedSchoolMajors);
            }
        }
    }

    for (onlinecourse in education.onlinecourses) {
        $(".education-entry").append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlinecourses[onlinecourse].title);
        $(".education-entry:last").append(formattedOnlineTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlinecourses[onlinecourse].school);
        $(".education-entry:last a").append(formattedOnlineSchool);

        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlinecourses[onlinecourse].dates);
        $(".education-entry:last").append(formattedOnlineDate);

        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlinecourses[onlinecourse].url);
        $(".education-entry:last").append(formattedOnlineUrl);

    }
}
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);