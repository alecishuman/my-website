import pipeLogo from "../../public/pipeiq_logo.png";
import launchPadLogo from "../../public/launchpad_logo.png";
import keseraLogo from "../../public/kesera_logo.png";
import pipePage from "../../public/pipeiq_page.png";
import keseraPage from "../../public/kesera_page.png";
import launchpadPage from "../../public/launchpad_page.png";

export const allProjects = [
  {
    logo: launchPadLogo,
    page: "launchpad_page.png",
    title: "Developer",
    company: "The C.O.D.E. Initiative",
    link: "",
    time: "September 2023 - 2024",
    activities: [
      "Teamed with 12 UBC Launch Pad members to develop an online tutoring platform for The C.O.D.E. Initiative",
      "Manage user access and profiles for admins, tutors, and parents",
      "Created platforms to schedule, manage, and change classes",
    ],
    mobile:
      "I teamed up with 12 other UBC Launch Pad members to recreate from scratch an online tutoring platform for The C.O.D.E. Initiative.",
    skills: ["react", "css", "node", "express", "sql", "restapi"],
  },
  {
    logo: keseraLogo,
    page: "kesera_page.png",
    title: "Lead Developer",
    company: "Kesera",
    link: "https://www.kesera.ca/",
    time: "June 2022 - February 2023",
    activities: [
      "Lead a team of 4 to create a social media app for Kesera using React and Firebase",
      "Created real-time interaction, messaging , posting, and data storage",
      "Helped design website",
    ],
    mobile:
      "I was the lead software developer for the web application at Kesera, mentoring 5 other highschoolers to build a social media application.",
    skills: ["react", "html", "css", "firebase"],
  },
  {
    title: "More To Come...",
    company: "Just you wait",
    time: "Secretly building cool stuff",
    activities: [
      "Hint 1: I like food",
      "Hint 2: I like to code",
      "Hint 3: I like to code food",
    ],
    mobile:
      "This project is still in the works, but I'm excited to share it soon!",
  },
];
