import { ServiceType, SkillType } from "./global";

export const listOfSkills: SkillType[] = [
  {
    icon: "icon path",
    title: "Frontend Developer",
    yearsOfExperience: 3,
    subSkill: [
      {
        name: "React",
        logo: "logo path"
      },
      {
        name: "Vue",
        logo: "logo path"
      },
      {
        name: "Svelte",
        logo: "logo path"
      },
    ]
  },
  {
    icon: "icon path",
    title: "Backend Developer",
    yearsOfExperience: 2,
    subSkill: [
      {
        name: "PHP",
        logo: "logo path"
      },
      {
        name: "C#",
        logo: "logo path"
      },
      {
        name: "Python",
        logo: "logo path"
      },
    ]
  },
  {
    icon: "icon path",
    title: "Mobile Developer",
    yearsOfExperience: 1,
    subSkill: [
      {
        name: "Flutter",
        logo: "logo path"
      },
    ]
  },
  {
    icon: "icon path",
    title: "Game Developer",
    yearsOfExperience: 1,
    subSkill: [
      {
        name: "Unity",
        logo: "logo path"
      }
    ]
  }
]

export const listOfServices: ServiceType[] = [
  {
    icon: "U",
    role: "UI/UX Designer",
    serviceList: ["I design the user interface and experience", "Web page development", "I position your company brand at the top by applying futuristic design concepts"]
  },
  {
    icon: "FE",
    role: "Frontend Engineer",
    serviceList: ["Great at building translating intuitive designs into high quality code", "Cross browser compatible websites", "Responsive websites that can be easily viewed on mobile", "Well optimized scripts that run seamlessy on any browser"]
  },
  {
    icon: "BE",
    role: "Backend Developer",
    serviceList: ["Adept at setting up optimized database interactions with web app frontend", "Setup GraphQL or RESTful APIs that execute needed services or speak with data store to save certain information", "Knowledgeable with caching strategies to make web apps run faster, even with low bandwith", "Skilled at creating PWAs that enable web apps function offline"]
  }
]