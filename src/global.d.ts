import React, { MouseEventHandler, ReactChild, ReactNode } from "react";
import { IconType } from "react-icons/lib";

export type ScrollToTopProps = {
  title?: string;
  children: React.ReactNode;
};

export type NavLinkProps = {
  toggleIcon: JSX.Element;
  toggleTheme: MouseEventHandler<HTMLLIElement>;
};

export type MobileNavProps = {
  collapsePanel: () => void;
};

export type MobileLinkItemProps = {
  path: string;
  pathName: string;
  icon: IconType;
  collapsePanel: () => void;
};

// a stash of all types
export type SectionTitleProps = {
  title: string;
  description: string;
};

// can be expanded by adding projects and links
export type SkillType = {
  icon: IconType;
  // icon: string;
  title: string;
  yearsOfExperience: number;
  subSkill: SubSkillType[];
};

export type SkillProps = {
  skill: SkillType;
  skillIndex: number;
};

export type SubSkillType = {
  name: string;
  logo: IconType;
};

export type ServiceType = {
  role: string;
  icon: IconType; // to be changed to an icon [x]
  serviceList: string[];
};



export type ProjectType = {
  coverImage: string;
  name: string;
  description: string;
  repoLink: string;
  demoLink: string;
  techStacks: string[];
};

export type ProjectProps = {
  project: ProjectType;
};

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
  toggleIcon: JSX.Element;
  toggleTheme: () => void;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ContactMessageType = {
  name: string;
  email: string;
  project: string;
  message: string;
};

export type PageContainerProps = {
  theme: any;
  alignItems?: string;
  fullscreen?: boolean;
};

export type SAboutProps = {
  theme: any;
  darkTheme: boolean;
};

export type ShortStoryType = {
  gameDev: string;
  softwareDev: string;
};
