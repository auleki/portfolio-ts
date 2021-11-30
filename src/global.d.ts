import React from "react";

// a stash of all types
export type SectionTitleProps = {
  title: string;
  description: string;
};

// can be expanded by adding projects and links
export type SkillType = {
  icon: string;
  title: string;
  yearsOfExperience: number;
  subSkill: SubSkillType[];
};

export type SkillProps = {
  skill: SkillType
  key: number
}

export type SubSkillType = {
  name: string;
  logo: string;
};

export type ServiceType = {
  role: string;
  icon: string; // to be changed to an icon
  serviceList: string[];
};

export type ProjectType = {
  coverImage: string;
  name: string;
  description: string;
  repoLink: string;
  demoLink: string;
}

export type ProjectProps = {
  project: ProjectType
}

export type ServicePropsType = {
  service: ServiceType;
};

export type SkillsList = {
  skills: SkillType[];
};

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ContactMessageType = {
  name: string;
  email: string;
  project: string;
  message: string;
}

export type PageContainerProps = {
  theme: any;
  alignItems?: string
}

export type ShortStoryType = {
  gameDev: string
  softwareDev: string
}