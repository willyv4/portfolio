import devheadScreenShot from "../assets/devhead-screenshot.png";
import soundSculptScreenShot from "../assets/soundsculpt-screenshot.png";
import crimeScoperScreenShot from "../assets/crimescope-screenshot.png";
import joblyScreenShot from "../assets/jobly-screenshot.png";
import snapShuffleScreenShot from "../assets/snapshuffle-screenshot.png";
import boggleScreenShot from "../assets/boggle-screenshot.png";
import connect4ScreenShot from "../assets/connect4-screenshot.png";
import weatherScreenShot from "../assets/weather-screenshot.png";
import dankMemeScreenShot from "../assets/dankmeme-screenshot.png";

export const pieces = [
  {
    role: "Contributer",
    title: "SoundSculpt",
    shortDescription: "Realtime customizable music for video creators.",
    type: "web",
    img: soundSculptScreenShot,
    siteLink: "https://soundsculpt.app/",
    codeLink: "",
    content:
      "- Architected, designed, and developed SoundSculpt's Content Management System (CMS) from start to finish, evaluating build vs. buy. Including: database schemas, database queries, RESTful API, and Frontend UI/UX. \n" +
      "- Developed and Designed SoundSculpt's AI-powered chat experience, organizing context, configuring functions, and integrating with core application logic. \n" +
      "- Implemented SoundSculpt's frontend UI for homepage, songs list page, according to designer specifications. Implemented all frontend aspects for SoundSculpt's blog page, including UI/UX design and frontend development. \n" +
      "- Analyzed data (LogRocket) to optimize site usability, driving iterative improvements aligned with identified growth strategies and enhancing user experiences. \n" +
      "- Collaborated across teams, proposing innovative features and actively participating in design systems and dynamic brainstorming sessions to drive product growth and enhance user experiences. \n" +
      "- Organized and outlined weekly action items, aligning software development tasks with identified growth strategies, ensuring a cohesive approach toward strategic objectives.",

    techStack: "",
    devImg:
      "https://media.licdn.com/dms/image/C5603AQFyFzVzmfXUfw/profile-displayphoto-shrink_800_800/0/1645673504174?e=2147483647&v=beta&t=E92MO2AnX_HCJsfJPX7UP4Qmup_1mPDWTsd6l2iLsaM",
    developer: "William Valadez",
  },
  {
    role: "Springboard Capstone Project",
    title: "DevHead",
    shortDescription:
      "Social Media app for developers - integrate github and leetcode - streamline your portfolio site.",
    type: "web",
    img: devheadScreenShot,
    siteLink: "https://dev-head-willyv4.vercel.app",
    codeLink: "https://github.com/willyv4/DevHead",
    content:
      " - Developed a social media app for developers, showcasing coding projects, skills, and statistics. \n" +
      " - Created features including: profile creation & editing (skills section, about section, image, github/leetcode integrations, portfolio pieces), commenting, liking, following. \n" +
      " - Integrated LeetCode and GitHub profiles via GraphQL APIs. \n" +
      " - Engineered RESTful API endpoints for efficient data processing.",
    techStack: "React, Remix, TypeScript, PostgreSQL, SQL, Tailwind CSS.",
    devImg:
      "https://media.licdn.com/dms/image/C5603AQFyFzVzmfXUfw/profile-displayphoto-shrink_800_800/0/1645673504174?e=2147483647&v=beta&t=E92MO2AnX_HCJsfJPX7UP4Qmup_1mPDWTsd6l2iLsaM",
    developer: "William Valadez",
  },
  {
    role: "Springboard Capstone Project",
    title: "CrimeScope",
    shortDescription: "AI safety tips according to location & crime data.",
    type: "web",
    img: crimeScoperScreenShot,
    siteLink: "https://crime-scope.herokuapp.com/signup",
    codeLink: "https://github.com/willyv4/CrimeScope",
    content:
      "- Clear Crime Data Presentation: Simplified US crime trends representation with percentages and tables.\n" +
      "- Personalized Safety Tips: AI-generated advice tailored to location and crime type, offering varied responses.\n" +
      "- Community Engagement: Encouraging user contributions, sharing experiences, and safety tips.\n" +
      "- User-Friendly Experience: Seamless flow from registration/login to city-based crime search and interactive feed.\n" +
      "- Customizable User Profile: Allows users to update information, manage posts, and delete their account.",

    techStack: "",
    devImg:
      "https://media.licdn.com/dms/image/C5603AQFyFzVzmfXUfw/profile-displayphoto-shrink_800_800/0/1645673504174?e=2147483647&v=beta&t=E92MO2AnX_HCJsfJPX7UP4Qmup_1mPDWTsd6l2iLsaM",
    developer: "William Valadez",
  },
  {
    role: "Springboard Project",
    title: "Jobly",
    shortDescription: "A job search web clone.",
    type: "web",
    img: joblyScreenShot,
    siteLink: " https://jobly-bywillv.onrender.com/",
    codeLink: "https://github.com/willyv4/jobly-full-stack",
    content:
      "- Implemented Node/Express backend API routing and developed a custom ORM with node-pg for efficient database queries. \n" +
      "- Designed and implemented an API class to facilitate seamless integration with the backend API on the front-end application. \n" +
      "- Created an intuitive user interface leveraging React & Tailwind CSS for UI. \n" +
      "- Ensured robust user authentication using JSON web tokens, bcrypt, and middleware for enhanced security measures.",
    techStack: "React, Express, Tailwind CSS, ",
    devImg:
      "https://media.licdn.com/dms/image/C5603AQFyFzVzmfXUfw/profile-displayphoto-shrink_800_800/0/1645673504174?e=2147483647&v=beta&t=E92MO2AnX_HCJsfJPX7UP4Qmup_1mPDWTsd6l2iLsaM",
    developer: "William Valadez",
  },
  {
    role: "Project",
    title: "SnapShuffle",
    shortDescription: "An image search website.",
    type: "web",
    img: snapShuffleScreenShot,
    siteLink: "https://snapshuffle.netlify.app/",
    codeLink: "https://github.com/willyv4/SnapShuffle-img-search",
    content:
      "- Developed a frontend application aimed at learning GSAP animation and Styled-Components by quickly building the project while relying on documentation as the primary learning resource. \n" +
      "- Utilized the Pexels 3rd party API along with their SDK to integrate image search functionality. \n" +
      "- Crafted an intuitive and aesthetically pleasing UI using Styled-Components & React. \n" +
      "- Implemented a search form that interacts seamlessly with the Pexels API for fetching images.",
    techStack: "React, TypeScript, Styled-Compenants, GSAP",
    devImg:
      "https://media.licdn.com/dms/image/C5603AQFyFzVzmfXUfw/profile-displayphoto-shrink_800_800/0/1645673504174?e=2147483647&v=beta&t=E92MO2AnX_HCJsfJPX7UP4Qmup_1mPDWTsd6l2iLsaM",
    developer: "William Valadez",
  },
  {
    role: "Project",
    title: "Boggle",
    shortDescription: "Find as much words to beat your hi score!",
    type: "web",
    img: boggleScreenShot,
    siteLink: "https://boggle-ecru.vercel.app/",
    codeLink: "https://github.com/willyv4/boggle",
    content:
      "- Interactive Gameplay: Offers an engaging Boggle game experience with a timer, allowing users to input guesses. \n" +
      "- Input Validation:  Validates user-provided words against the generated Boggle board for correctness. \n" +
      "- Score Tracking:  Dynamically tracks and updates the user's score based on the validity and length of guessed words. \n" +
      "- Backend Integration:  Utilizes Python Flask to manage game actions, including word validation and score management. ",

    techStack: "Python, Flask, Jinja, HTML, CSS, Jquery",
    devImg:
      "https://media.licdn.com/dms/image/C5603AQFyFzVzmfXUfw/profile-displayphoto-shrink_800_800/0/1645673504174?e=2147483647&v=beta&t=E92MO2AnX_HCJsfJPX7UP4Qmup_1mPDWTsd6l2iLsaM",
    developer: "William Valadez",
  },
  {
    role: "Project",
    title: "Weather App",
    shortDescription: "Ahh the classic weather app 🥱",
    type: "web",
    img: weatherScreenShot,
    siteLink: "https://weathered300.netlify.app/",
    codeLink: "https://github.com/willyv4/weatherApi",
    content:
      "- Developed a weather application using vanilla JavaScript that utilizes the OpenWeatherMap API to display real-time weather information. \n" +
      "- Implemented dynamic weather display functionality, updating details such as temperature, humidity, wind speed, and weather condition based on user input for a specific city. \n" +
      "- Crafted an intuitive user interface with an animated search bar and a responsive card layout to present weather details in an easily accessible manner. \n" +
      "- Integrated the OpenWeatherMap API using JavaScript's fetch function to retrieve and display weather data, ensuring seamless information retrieval and display within the application.",
    techStack: "HTML, CSS, JavaScript",
    devImg:
      "https://media.licdn.com/dms/image/C5603AQFyFzVzmfXUfw/profile-displayphoto-shrink_800_800/0/1645673504174?e=2147483647&v=beta&t=E92MO2AnX_HCJsfJPX7UP4Qmup_1mPDWTsd6l2iLsaM",
    developer: "William Valadez",
  },
  {
    role: "Project",
    title: "Connect4",
    shortDescription: "Get four in a row and you win!",
    type: "web",
    img: connect4ScreenShot,
    siteLink: "https://connect4-3000.netlify.app/",
    codeLink: "https://github.com/willyv4/connect-4-oop-refactor",
    content:
      "- Developed an object-oriented Connect Four application using vanilla JavaScript. \n" +
      "- Created a captivating, animated UI using vanilla JS and CSS, demonstrating adept interaction with the Document Object Model (DOM). \n" +
      "- Enhanced DOM manipulation skills by directly interacting with the Document Object Model, enriching the user experience. \n" +
      "- Implemented Connect Four game logic and integrated/modified Michael Beckius's Confetti CodePen for added interactivity.",
    techStack: "HTML, CSS, JavaScript",
    devImg:
      "https://media.licdn.com/dms/image/C5603AQFyFzVzmfXUfw/profile-displayphoto-shrink_800_800/0/1645673504174?e=2147483647&v=beta&t=E92MO2AnX_HCJsfJPX7UP4Qmup_1mPDWTsd6l2iLsaM",
    developer: "William Valadez",
  },
  {
    role: "Project",
    title: "Dank Memez",
    shortDescription: "Create some crazy memes and troll the internet!",
    type: "web",
    img: dankMemeScreenShot,
    siteLink: "https://dankmemegenerator.netlify.app/",
    codeLink: "https://github.com/willyv4/Meme-Generator",
    content:
      "- Developed a meme generating application using vanilla JavaScript to create custom memes with user-defined top and bottom text over an image. \n " +
      "- Implemented form validation for the image URL entered by the user, dynamically checking for the validity of the URL before generating the meme. \n " +
      "- Created a responsive user interface with form inputs for image URL, top text, and bottom text, allowing users to generate memes seamlessly. \n " +
      "- Utilized event listeners to handle form submissions and user interactions, enabling the addition and removal of generated memes dynamically. \n " +
      "- Employed DOM manipulation techniques to dynamically create and display memes in a container with user-provided text over the chosen image. \n " +
      "- Incorporated hover functionality on memes for deletion, enhancing user interaction and experience within the application.",
    techStack: "HTML, CSS, JavaScript",
    devImg:
      "https://media.licdn.com/dms/image/C5603AQFyFzVzmfXUfw/profile-displayphoto-shrink_800_800/0/1645673504174?e=2147483647&v=beta&t=E92MO2AnX_HCJsfJPX7UP4Qmup_1mPDWTsd6l2iLsaM",
    developer: "William Valadez",
  },
];
