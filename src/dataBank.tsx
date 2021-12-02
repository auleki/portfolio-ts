import { ProjectType, ServiceType, ShortStoryType, SkillType } from "./global";
import { BsBraces, BsServer, BsPhone, BsController, BsColumnsGap, BsCodeSlash } from "react-icons/bs";
import { SiReact, SiVuedotjs, SiSvelte, SiFlutter, SiUnity, SiPhp, SiPython, SiCsharp } from "react-icons/si";


export const listOfSkills: SkillType[] = [
  {
    icon: BsBraces,
    title: "Frontend Developer",
    yearsOfExperience: 3,
    subSkill: [
      {
        name: "React",
        logo: SiReact
      },
      {
        name: "Vue",
        logo: SiVuedotjs
      },
      {
        name: "Svelte",
        logo: SiSvelte
      },
    ]
  },
  {
    icon: BsServer,
    title: "Backend Developer",
    yearsOfExperience: 2,
    subSkill: [
      {
        name: "PHP",
        logo: SiPhp
      },
      {
        name: "C#",
        logo: SiCsharp
      },
      {
        name: "Python",
        logo: SiPython
      },
    ]
  },
  {
    icon: BsPhone,
    title: "Mobile Developer",
    yearsOfExperience: 1,
    subSkill: [
      {
        name: "Flutter",
        logo: SiFlutter
      },
    ]
  },
  {
    icon: BsController,
    title: "Game Developer",
    yearsOfExperience: 1,
    subSkill: [
      {
        name: "Unity",
        logo: SiUnity
      }
    ]
  }
]

export const listOfServices: ServiceType[] = [
  {
    icon: BsColumnsGap,
    role: "UI/UX Designer",
    serviceList: ["I design the user interface and experience", "Web page development", "I position your company brand at the top by applying futuristic design concepts"]
  },
  {
    icon: BsCodeSlash,
    role: "Frontend Engineer",
    serviceList: ["Great at building translating intuitive designs into high quality code", "Cross browser compatible websites", "Responsive websites that can be easily viewed on mobile", "Well optimized scripts that run seamlessy on any browser"]
  },
  {
    icon: BsServer,
    role: "Backend Developer",
    serviceList: ["Adept at setting up optimized database interactions with web app frontend", "Setup GraphQL or RESTful APIs that execute needed services or speak with data store to save certain information", "Knowledgeable with caching strategies to make web apps run faster, even with low bandwith", "Skilled at creating PWAs that enable web apps function offline"]
  }
]

export const listOfProjects: ProjectType[] = [
  {
    coverImage: "https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616178662/portfolio/finpay-sc_pg7jiy.png",
    name: "Finpay",
    demoLink: "https://finpayng.com/",
    description: "This here is the landing page for a startup fintech company. I really enjoyed bringing this website to life as I worked alongside a talented UI developer and an amazing Project Manager to deliver this.",
    repoLink: "https://github.com/auleki/lynks"
  },
  {
    coverImage: "https://res.cloudinary.com/dyj6pqx6d/image/upload/v1637926873/portfolio/covid-fs_yrs8dk.png",
    name: "Covid Tracker",
    demoLink: "https://finpayng.com/",
    description: "I built this Covid-19 tracker to help people keep track of the various Covid statistics back in mid 2020.",
    repoLink: "https://github.com/auleki/lynks"
  },
  {
    coverImage: "https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616178827/portfolio/checkadigs-sc1_aahpld.png",
    name: "Fashion Quiz",
    demoLink: "https://finpayng.com/",
    description: "This quiz feature is packed with user authentication and time validations to prevent cheating and fairness among customers. As the client wanted customers of his e-commerce store to partake in giveaways where they earned several gifts.",
    repoLink: "https://github.com/auleki/lynks"
  },
  {
    coverImage: "https://res.cloudinary.com/dyj6pqx6d/image/upload/v1637927718/portfolio/portfolio-fs_wjgkzp.png",
    name: "Portfolio",
    demoLink: "https://finpayng.com/",
    description: "This, no pun intended is a reference to the current portfolio that is being viewed. I had a lot of fun working on this as I had previously used this UI with HTML, CSS, JS and rebuilding this in React and Typescript was quite refreshing.",
    repoLink: "https://github.com/auleki/lynks"
  },
  {
    coverImage: "https://res.cloudinary.com/dyj6pqx6d/image/upload/v1637928617/portfolio/ca-be-fs_ypccq3.png",
    name: "E-Commerce Admin Panel",
    demoLink: "https://finpayng.com/",
    description: "This admin dashboard was built for the staff of an e-commerce store to keep track of customer activities and pending actions that needed execution on the admin's end. Actions like fulfilling orders, responding to complains, editing and uploading cloth information, toggling in stock",
    repoLink: "https://github.com/auleki/lynks"
  },
  {
    coverImage: "https://res.cloudinary.com/dyj6pqx6d/image/upload/v1616179242/portfolio/checkadigs-sc3_klblyk.png",
    name: "E-Commerce Store",
    demoLink: "https://finpayng.com/",
    description: "A fashion website where you can browse clothing, add them to cart and select items based several conditions like sizes, colors and quantity and pay all in under 5 minutes",
    repoLink: "https://github.com/auleki/lynks"
  }
]

export const shortStory: ShortStoryType = {
  gameDev: "After building web applications for 3+ years my mind yarned to for a challenge to impact more and flesh out some of the ideas I've been working on",
  softwareDev: "Started out as a UI developer designing with Figma, but I hungered to achieve more so I pushed further into web development and grew into a Software Developer."
}