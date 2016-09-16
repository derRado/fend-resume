// Helper function to replace %data% in submitted placeholder with submitted content
var formatter = function(placeholder, content, url) {
    var formattedString = placeholder.replace('%data%', content);

    if (url !== undefined) {
        // Submitted url, replace # in the formattedString
        formattedString = formattedString.replace('#', url);
    }

    return formattedString;
};

// Bio Object
var bio = {
    'name': 'der Rado',
    'role': 'Learner of Things',
    'contacts': {
        'mobile': '987654321',
        'email': 'learn@derrado.de',
        'github': 'derRado',
        'location': 'Kiedrich'
    },
    'welcomeMessage': 'The FEND Resume Project. Feel free to look around.',
    'skills': ['Reads fantasy books really fast', 'Makes a great Chilli con carne', 'Likes Gandalf'],
    'biopic': 'images/gandalf.jpg',
    'display': function() {
        // Add single content to dom
        $('#header').prepend(formatter(HTMLheaderRole, this.role));
        $('#header').prepend(formatter(HTMLheaderName, this.name));

        $('#header').append(formatter(HTMLbioPic, this.biopic));
        $('#header').append(formatter(HTMLwelcomeMsg, this.welcomeMessage));

        $('#topContacts').append(formatter(HTMLmobile, this.contacts.mobile));
        $('#topContacts').append(formatter(HTMLemail, this.contacts.email));
        $('#topContacts').append(formatter(HTMLgithub, this.contacts.github));
        $('#topContacts').append(formatter(HTMLlocation, this.contacts.location));

        $('#footerContacts').append(formatter(HTMLmobile, this.contacts.mobile));
        $('#footerContacts').append(formatter(HTMLemail, this.contacts.email));
        $('#footerContacts').append(formatter(HTMLgithub, this.contacts.github));
        $('#footerContacts').append(formatter(HTMLlocation, this.contacts.location));

        $('#header').append(HTMLskillsStart);

        // iterate through skills and append to dom
        this.skills.forEach(function(skill) {
            $('#skills').append(formatter(HTMLskills, skill));
        });
    }
};

// Education Object
var education = {
    'schools': [{
        'name': 'Walluftalschule',
        'location': 'Walluf',
        'degree': 'Primary School',
        'majors': ['None', 'Really'],
        'dates': '1984 - 1988',
        'url': 'http://www.walluftalschule.de/'
    }, {
        'name': 'Gutenberg Realschule',
        'location': 'Eltville',
        'degree': 'Secondary School',
        'majors': ['Nope', 'Still no'],
        'dates': '1988 - 1994',
        'url': 'http://www.gutenbergschule-eltville.de/'
    }],
    'onlineCourses': [{
        'title': 'Intro to HTML and CSS',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'https://www.udacity.com/'
    }],
    'display': function() {
        // iterate over schools
        this.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);

            $('.education-entry:last').append(formatter(HTMLschoolName, school.name, school.url) + formatter(HTMLschoolDegree, school.degree));
            $('.education-entry:last').append(formatter(HTMLschoolDates, school.dates));
            $('.education-entry:last').append(formatter(HTMLschoolLocation, school.location));

            // iterate through majors and append to dom
            school.majors.forEach(function(major) {
                $('.education-entry:last').append(formatter(HTMLschoolMajor, major));
            });
        });

        $('#education').append(HTMLonlineClasses);

        // iterate over courses
        this.onlineCourses.forEach(function(course) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formatter(HTMLonlineTitle, course.title, course.url) + formatter(HTMLonlineSchool, course.school));
            $('.education-entry:last').append(formatter(HTMLonlineDates, course.dates));
            $('.education-entry:last').append(formatter(HTMLonlineURL, course.url, course.url));
        });
    }
};

// Work Object
var work = {
    'jobs': [{
        'employer': 'Some Paper-Magazine',
        'title': 'Paper Boy',
        'location': 'Walluf',
        'dates': '1992 - 1994',
        'description': 'Well, delivering papers in the neighborhood. Funny days!',
        'url': 'http://www.rhein-main-presse.de/'
    }],
    'display': function() {
        // iterate over jobs
        this.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(formatter(HTMLworkEmployer, job.employer, job.url) + formatter(HTMLworkTitle, job.title));
            $('.work-entry:last').append(formatter(HTMLworkDates, job.dates));
            $('.work-entry:last').append(formatter(HTMLworkLocation, job.location));
            $('.work-entry:last').append(formatter(HTMLworkDescription, job.description));
        });
    }
};

// Projects Object
var projects = {
    'projects': [{
        'title': 'Have a computer!',
        'dates': '1986 - ongoing',
        'description': 'A Commodore C64. With a floppy disk and a green monitor!',
        'images': ['images/c64.png', 'images/floppy_disk.jpg'],
        'url': 'https://en.wikipedia.org/wiki/Commodore_64'
    }, {
        'title': 'First Car',
        'dates': '1996 - 1999',
        'description': 'Get a license. Buy a car. Enjoy freedom!',
        'images': ['images/civic.jpg'],
        'url': 'https://en.wikipedia.org/wiki/Honda_Civic_(fifth_generation)'
    }],
    'display': function() {
        // iterate over projects
        this.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);

            $('.project-entry:last').append(formatter(HTMLprojectTitle, project.title, project.url));
            $('.project-entry:last').append(formatter(HTMLprojectDates, project.dates));
            $('.project-entry:last').append(formatter(HTMLprojectDescription, project.description));

            // iterate through images and append to dom
            project.images.forEach(function(image) {
                $('.project-entry:last').append(formatter(HTMLprojectImage, image));
            });
        });
    }
};

// Call the display functions
work.display();
projects.display();
bio.display();
education.display();

// Append GoogleMap 
$('#mapDiv').append(googleMap);