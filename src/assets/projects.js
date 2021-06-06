import gramagram from "./images/Gramagram.png";
import Schedule from "./images/Schedule.png";
import FitnessTracker from "./images/FitnessTracker.png";
import weatherDashboard from "./images/weather-dashboard.png";
import employeeDirectory from "./images/EmployeeTracker.png";
import passwordgenarator from "./images/passwordgenarator.png";


const portfolioProjects = [
    {
        title: "Employee Directory",
        img: employeeDirectory,
        heading: "Filter and sort random employees!",
        description: `An employee directory application built in React. 
        The application pulls between 10-20 users using the Random User Generator API. 
        You can then filter and sort users by hire date, first name, last name, email and phone number.`,
        tech: "React.js, Random User Generator API, Javascript",
        link: "https://corbingar.github.io/HW19-employee-directory/",
        github: "https://github.com/CorbinGar/HW19-employee-directory"
    },
    {
        title: "Fitness Tracker",
        img: FitnessTracker,
        heading: "Helps keep you fit!",
        description: `If you want to keep track out how far youve ran or swam or both and all in an
        easy to use and simplistic package fitness tracker is for you just like this explanation its sweet and simple`,
        tech: "API, MongoDb, Express, Reactjs, nodejs",
        link: "https://salty-coast-03002.herokuapp.com/",
        github: "https://github.com/CorbinGar/HW17-WorkoutTracker"
    },
    {
        title: "gramagram",
        img: gramagram,
        heading: "Grandmas social media",
        description: `Are you tired of old grandmas taking up your social media feeds and 
        accidentally liking horrible news, well we have a solution gramagram, the socail media for the elderly
        with large easily readble text and big hard to miss buttons your grandmother will love it`,
        tech: "IndexedDB, MongoDB, Javascript, Express",
        link: "https://boiling-savannah-28129.herokuapp.com",
        github: "https://github.com/rsowald/GrammaGram"
    },
    {
        title: "Daily Scheduler",
        img: Schedule,
        heading: "Helping keep you organized",
        description: `the daily scheduler has an easy and intuitive interface for planning
        out you day, even highlighting the current hour in green and past hours in red making it
        much easier to at a glance , know what your whole day looks like`,
        tech: "HTML5, Bootstrap, Javascript",
        link: "https://corbingar.github.io/5-DailyDashboard.github.io/",
        github: "https://github.com/CorbinGar/5-DailyDashboard/"
    },
    {
        title: "Weather Dashboard",
        img: weatherDashboard,
        heading: "Check the weather!",
        description: `A weather dashboard app that displays both the current
        weather and the five day forecast for a searched city. The The UV index is
        color coded based on the severity level. The user's search history is
        saved in local storage.`,
        tech: "HTML5, Bootstrap, Javascript, Open Weather API",
        link: "https://corbingar.github.io/6-WeatherDashboard.github.io/",
        github: "https://github.com/CorbinGar/6-WeatherDashboard.github.io"
    },
    {
        title: "Password generator",
        img: passwordgenarator,
        heading: "Security is always importand",
        description: `you give this program the charcters and lenth of your
        desired password and it will give you a randomly generated password that is
        gauranteed to include  at least one of types of charcters you mention, for those
        pesky special charcter required passwords`,
        tech: "HTML5, Bootstrap, Javascript",
        link: "https://corbingar.github.io/3-PasswordGenerator.github.io/",
        github: "https://github.com/CorbinGar/3-PasswordGenerator/"
    }
]

export default portfolioProjects;
