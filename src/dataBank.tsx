import { SkillType } from "./global";

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