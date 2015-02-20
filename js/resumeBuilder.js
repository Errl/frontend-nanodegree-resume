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
            "description": "Travel advisory start up focused on corporate rewards management. After three years of building up Discounted Flight Guru which focused on individual clients, I decided to re-brand the company to include corprorate services. After building the website from the ground up, I continued to maintain and update the website. I established and maintained a google adwords campaign as well as a full socail media campaign. I created an automated lead generation system which I currently oversea. I not only created my own book of corporate clients, I also was responsible for managing the sales team."
        },

        {
            "employer": "Discounted Flight Guru",
            "title": "President & Founder",
            "location": "Howell, NJ",
            "dates": "2010 - Future",
            "description": "An online travel start up, primarily focused on selling international business and first class tickets. I built the website from the ground up and created as well as maintained a google adwords campaign. I was responsible for generating leads, training new sales agents, and managing the sales department. After three succesful years, we decided to rebrand the comapny as Elite Travel Guru, and merged the two companies together"
        },

        {
            "employer": "Izzy & Nat's",
            "title": "Owner & Operator",
            "location": "Battery Park, NY",
            "dates": "2008 - 2010",
            "description": "Managed and facilitated the development and construction of restaurant interior and exterior from the ground up. I created and implemented an ordering process to manage food and beverage costs efficiencies as well as implemented a labor cost infrastructure. I was the the general manager in charge of the full day to day operations, including but not limited to, training and maintaining staff, accounting and billing, quality control and customer satisfaction."
        },

        {
            "employer": "Friedman's Deli",
            "title": "General Manager",
            "location": "Manhattan, NY",
            "dates": "2007 - 2008",
            "description": "After being in the food and hospitality business for over a decade, I was approached by a resteraunt owner to help restructure this one year old resteraunt in order to increase efficiency and the bottom line. I was responsible for all day to day operations of running and maintaining the business. I was able to lower labor costs by 40% and lower food cost by over 30%, which increased the monthly revenue by over 100%"
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
            "images": ["images/etglogo.png", "images/etg.png"]
        },

        {
            "title": "Elite Travel Guru Website",
            "dates": "2012",
            "description": "I built the website from scratch using asp.net webforms and C#. I created a capture form that binds to a SQL server database. Although I am not an artist, I did all of the image editing myself with Photoshop. Built and maintained an electronic mailing campaign to generate and keep clients.",
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