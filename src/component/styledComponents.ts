import styled, { css, keyframes } from "styled-components";
import { PageContainerProps, SAboutProps } from "../global";
import { colors, fonts } from "./constants";

export const Shaker = keyframes`
  0% {
    transform: rotatez(-2deg) translateY(0);
  }

  30% {
    transform: rotatez(2deg) translateY(-1rem);
  }

  100% {
    transform: rotatez(0deg) translateY( 0);
  }
`;

export const BounceDown = keyframes`
  0% {
    transform: rotatez(-2deg) translateY(0);
  }

  30% {
    transform: rotatez(2deg) translateY(1rem);
  }

  100% {
    transform: rotatez(0deg) translateY( 0);
  }
`;

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Hover = keyframes`
  0% {
    color: ${colors.general.lightPurple}
    transform: translateY(0rem);
  }

  60% {
    /* color: ${colors.general.black}; */
    transform: translateY(-.2rem);
  }

  100% {
    color: ${colors.general.white};
    transform: translateY(0rem);
  }
`;

export const SHeader = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    place-items: center;
    margin-top: 10%;

    h1 {
      font-size: 3.5rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .socialConnects {
      list-style-type: none;

      /* width: 20%; */

      li {
        font-size: 2rem;
        color: ${colors.general.purple};
        transition: color 250ms ease-in;

        &:hover {
          color: ${colors.general.lightPurple};
        }
      }
    }

    .devInfo {
      /* display: inherit; */
      /* flex-direction: column; */
      /* width: 30%; */
      display: inline;
      flex-direction: column;
      p,
      button {
        margin-top: 1rem;
      }
    }

    .devImage {
      text-align: center;

      .home__blob {
        fill: ${theme.buttonBg};
        width: 300px;
      }
      .home__blob-img {
        width: 170px;
      }
    }

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column-reverse;

      .button {
        align-self: center;
      }

      .socialConnects {
        display: flex;
        margin-top: 1rem;
        gap: 2rem;
      }
    }

    @media (max-width: 546px) {
      .devInfo {
        a {
          display: block;
          width: 100%;
          text-align: center;
        }
      }
    }
  `
);

export const SMobileLinkItem = styled.li(
  ({ theme }) => css`
    border: 2px solid ${theme.buttonBg};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: 9rem;
    border-radius: 50%;
    width: 9rem;
    margin: 0;
    color: ${theme.buttonText};

    a {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;

      &.active {
        /* background: green; */
        .icon {
          color: inherit;
          animation: ${BounceDown} infinite 1s;
        }
      }
    }

    .icon {
      font-size: 2rem;
      z-index: 5;
      color: ${theme.text};
    }

    .linkText {
      color: ${theme.text};
      z-index: 0;
    }

    .linkText,
    .icon {
      /* color: ${theme.buttonText}; */
      /* color: ${colors.general.purple}; */
    }
  `
);

export const SMobileNavbar = styled.div(
  ({ theme }) => css`
    background: ${theme.body};
    position: fixed;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    z-index: 10;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    flex-wrap: wrap;

    .theme_switcher {
      height: 3rem;
      width: 3rem;
      /* padding: 1.5rem; */
      border-radius: 50%;
      font-size: 1.5rem;
      border: 2px solid ${theme.card};
      top: 1rem;
      text-align: center;
      border: 0;
      background: ${theme.buttonBg};
      color: ${theme.buttonText};
    }

    .navList {
      /* border: 2px solid crimson; */
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: space-around;

      padding: 0 1rem;
      flex-wrap: wrap;
      position: relative;
    }

    @media (max-width: 400px) {
      display: flex;
      flex-direction: column;
    }
  `
);

export const SNavbar = styled.nav(
  ({ theme }) => css`
    display: flex;
    width: 100%;
    background: ${theme.body};
    color: ${theme.text};
    padding: 1rem 4rem;
    justify-content: space-between;
    align-items: center;

    .mobileToggle {
      font-size: 2rem;

      &:active {
        transform: translateY(0.4rem);
      }
    }

    .nav__logo {
      font-size: 1.3rem;
      transition: font-weight 600ms ease-in-out;
      &:hover {
        font-weight: 800;
        color: ${colors.general.red};
      }
    }

    a {
      text-decoration: none;
      color: inherit;

      &.active {
        color: ${colors.general.purple};
      }
    }

    .navMenu {
      display: flex;
    }

    .navList {
      display: flex;
      list-style-type: none;

      li {
        padding: 1rem;
        cursor: pointer;
        &:hover {
          color: crimson;
        }

        &.theme_switcher {
          font-size: 1.2rem;
          display: inline-flex;
          transition: transform 200ms ease-in;

          &:hover {
            transform: translateY(-0.3rem);
          }
        }
      }
    }

    @media (max-width: 450px) {
      padding: 1rem 2rem;
    }

    @media (max-width: 350px) {
      padding: 1rem 1rem;
    }

    /* @media (min-width: 851px) {
      .mobileToggle {
        display: none;
      }
    }

    @media (max-width: 851px) {
      .navList {
        display: none;
      }
      .mobileToggle {
        display: block;
      }
    } */
  `
);

export const STitle = styled.h1(
  () => css`
    /* font-weight: 400; */
  `
);

export const SSubTitle = styled.h2(
  () => css`
    font-weight: 400;
  `
);

export const SParagraph = styled.p(
  () => css`
    font-size: 1.1rem;
  `
);

export const PageContainer = styled.div<PageContainerProps>(
  ({ theme, alignItems, fullscreen }) => css`
    padding: 2rem 4rem;
    background: ${theme.body};
    display: flex;
    flex-direction: column;
    color: ${theme.text};
    width: 100%;
    min-height: ${fullscreen ? "100vh" : "100%"};
    overflow-x: hidden;
    align-items: ${alignItems || "inherit"};
    /* align-items: center; */

    /* box-shadow: 4px 10px 5px rgba(0, 0, 0, 0.2); */
    /* max-width: 768px; */

    @media (max-width: 450px) {
      padding: 2rem;
    }

    @media (max-width: 350px) {
      padding: 2rem 1rem;
    }
  `
);

export const SButton = styled.button(
  ({ theme }) => css`
    padding: 1rem 1.5rem;
    background: ${theme.buttonBg};
    border-radius: 0.2rem;
    font-size: 1rem;
    color: ${theme.buttonText};
    border: none;
    cursor: pointer;
    transition: background 200ms ease-in, color 150ms ease-out,
      transform 50ms ease-in;
    border: none;
    outline: none;

    &:hover {
      background: ${theme.text};
      color: ${theme.body};
    }

    &:active {
      transform: translateY(0.1rem);
    }
  `
);

export const SSectionTitle = styled.section(
  () => css`
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    /* border: 1px solid blue; */
  `
);

export const SDescription = styled.span(
  () => css`
    font-size: 0.8rem;
  `
);

export const SAbout = styled.section<SAboutProps>(
  ({ theme, darkTheme }) => css`
    .aboutMe {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: 2fr 2fr;
      justify-content: center;

      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        /* border: 1px solid grey; */
        width: 40vw;
        img {
          height: 20rem;
          width: 20rem;
          box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.5);
          border: 8px solid ${colors.general.lightPurple};
          object-fit: cover;
          transition: box-shadow 200ms ease-in, border 300ms ease-in;
          border-radius: 50%;
          &:hover {
            box-shadow: none;
            border-color: transparent;
          }
        }
      }

      .description {
        /* border: 1px solid greenyellow; */
        width: 40vw;
        p {
          /* margin-bottom: 2rem; */

          /* &:first-letter {
          font-size: 1.8rem;
          padding-right: .2rem;
          } */
        }
      }

      .statList,
      .stats,
      .actions {
        display: flex;
        margin-bottom: 1rem;
        justify-content: center;
      }

      .statList {
        justify-content: space-between;
      }

      .stats {
        flex-direction: column;
        justify-content: center;
        margin: 1rem 0;
      }

      .stat {
        text-align: center;
        background: ${darkTheme
          ? colors.general.lightBlack
          : colors.general.fieldBg};
        color: ${darkTheme ? colors.general.white : colors.general.black};
        border-radius: 0.3rem;
        padding: 0.5rem;

        p:nth-child(1) {
          background: ${theme.buttonBg};
          color: ${theme.buttonText};
          margin-bottom: 1rem;
          border-radius: 2px;
        }
      }

      .statList {
        gap: 1rem;
      }
    }

    @media (max-width: 911px) {
      .aboutMe {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        .description {
          width: 100%;
          text-align: center;
        }

        .image {
          img {
            height: auto;
            width: 100%;
          }
        }
      }
    }

    @media (max-width: 400px) {
      .statList {
        display: flex;
        flex-direction: column;
      }
    }
  `
);

export const SSkills = styled.div(
  () => css`
    .skillsList {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `
);

export const SSkillsListing = styled.section(
  ({ theme }) => css`
    margin: 1rem 0;
    /* border: 1px dashed orange; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40rem;
    color: ${theme.buttonText};
    background: ${theme.buttonBg};
    padding: 1rem;
    border-radius: 0.2rem;
    cursor: pointer;
    border-bottom: ${theme.border} 0.2rem solid;
    transition: transform 200ms ease-out;

    &:hover {
      box-shadow: 4px 4px 15px 5px ${theme.accordionShadow};
      transform: translateY(-0.3rem);
    }

    .skill,
    .subSkills,
    .subSkill {
      display: flex;
    }

    .activeIndicator {
      font-size: 1.5rem;
    }

    .skill {
      gap: 2rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      &:hover {
        .activeIndicator {
          /* transform: scale(1.5); */
          cursor: pointer;
          animation: ${Hover} 1s infinite;
        }
      }
    }

    .logo {
      h4 {
        font-size: 2rem;
      }
    }

    .experienceYears {
      font-size: 0.8rem;
    }

    .subSkills {
      animation: ${FadeIn} 1s normal;
      justify-content: space-between;
    }

    .subSkill {
      flex-direction: column;
      justify-content: center;
      text-align: center;

      .logo {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 726px) {
      width: 100%;
    }
  `
);

export const SQualifications = styled.section(
  ({ theme }) => css`
    .tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .tab {
      margin-top: 2rem;
      display: flex;
      padding: 0.5rem 1rem;
      border-radius: 0.3rem;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: color 400ms ease-inherit;
      /* border-bottom: solid transparent .3rem; */

      span {
        font-size: 1.5rem;
      }

      &:hover {
        /* color: ${colors.general.purple}; */
      }

      &.active {
        color: ${theme.buttonText};
        background: ${theme.buttonBg};
      }

      h4 {
        font-weight: 400;
        font-size: 1rem;
      }
    }

    .timeline {
      margin-top: 2rem;
      gap: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .event {
      text-align: center;
      background: ${theme.buttonBg};
      border-radius: 0.3rem;
      color: ${theme.cardText};
      box-shadow: 4px 4px 20px rgba(100, 105, 100, 0.2);
      width: 25rem;
      padding: 2rem;
      h4 {
        font-size: 1rem;
        letter-spacing: 1px;
      }

      p {
        font-size: 1.2rem;
      }
    }
  `
);

export const SServices = styled.div(
  ({ theme }) => css`
    margin-top: 6rem;
    .services {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .textLink {
      cursor: pointer;
      transition: color 200ms ease-in, gap 200ms ease-in-out;
      display: flex;
      align-items: center;
      /* justify-content: center; */
      gap: 0.2rem;

      .arrowIcon {
        margin-top: 7px;
      }
      &:hover {
        color: ${theme.buttonBg};
        gap: 0.5rem;
      }
    }

    .service {
      width: 100%;
      padding: 1rem;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgb(0 0 0 / 15%);
      justify-content: space-evenly;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 20rem;
      /* filter: blur(5px); */
    }

    .listingContainer {
      background-color: ${colors.general.white};
      color: ${theme.buttonBg};
      padding: 2rem 1rem;
      border-radius: 5px;

      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: color 200ms ease-in-out;
        &:hover {
          color: ${colors.general.lightPurple};
        }
      }
    }

    .serviceListing {
      z-index: 10;
      list-style-type: none;
      height: 100vh;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #181818b7;

      li {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        /* line-height: 2.5rem; */
      }
    }

    @media (max-width: 627px) {
      margin-top: 0;
      .services {
        display: flex;
        flex-direction: column;
      }

      .serviceListing li {
        font-size: 1rem;
      }

      .listingContainer {
        margin: 0 1rem;
      }
    }
  `
);

export const SProjects = styled.div(
  ({ theme }) => css`
    .projects {
      padding: 2rem 0;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(3, 1fr);
    }

    .project {
      border: 2px solid ${theme.border};
      border-radius: 5px;
      position: relative;
      overflow: hidden;
      box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.2);
      transition: 400ms background ease-out, 100ms color ease-in,
        box-shadow 200ms ease-out;
      .thumbnail {
        height: auto;
        width: 100%;
        object-fit: cover;
      }

      .links {
        position: absolute;
        top: -100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        bottom: 0;
        background: #dddddd67;
        right: 0;
        left: 0;
        height: 100%;
        a {
          text-decoration: none;
          color: ${colors.general.white};
          padding: 1rem;
          border-radius: 5px;
          background: ${colors.general.purple};
          &:hover {
            background: ${colors.general.lightPurple};
          }
        }
        color: ${colors.general.white};
      }

      .description {
        padding: 1rem;
      }

      &:hover {
        background: ${theme.buttonBg};
        box-shadow: none;
        color: ${theme.buttonText};
        /* transform: rotateZ(5deg); */
        animation: ${Shaker} 1s normal;
        .links {
          top: 0;
        }
      }
    }

    @media (max-width: 1231px) {
      .projects {
        grid-template-columns: repeat(2, 2fr);
      }
    }

    @media (max-width: 833px) {
      .projects {
        display: flex;
        flex-direction: column;
      }
    }
  `
);

export const SContact = styled.div(
  ({ theme }) => css`
    .container {
      display: flex;
      /* border: 1px solid crimson; */
      padding: 1rem 0;
      justify-content: center;
      gap: 2rem;

      .action {
        align-items: center;
        display: flex;
        gap: 1rem;
        h2 {
          font-weight: 400;
        }
        p {
          color: ${colors.general.purple};
        }
      }

      .form {
        padding: 1rem;
        color: ${colors.general.black};

        .row {
          display: flex;
          gap: 1rem;
        }
      }

      .buttonGroup {
        button {
          width: 100%;
        }
      }

      .inputGroup {
        display: flex;
        flex-direction: column;
        background: ${colors.general.fieldBg};
        margin-bottom: 1rem;
        padding: 1rem 1rem 0 1rem;
        border-radius: 0.3rem;
        label {
          font-size: 0.9rem;
        }
        input,
        textarea {
          font-family: ${fonts.body};
          color: ${theme.buttonBg};
          padding-bottom: 1rem;
          outline: none;
          border: none;
          background: transparent;
        }
      }
    }

    @media (max-width: 750px) {
      .container {
        display: flex;
        flex-direction: column;

        .form {
          .row {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
        }
      }
    }

    @media (max-width: 450px) {
      .container {
        .actions {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  `
);

export const SFooter = styled.footer(
  ({ theme }) => css`
    background: ${theme.body};
    color: ${theme.text};
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: column;
    z-index: 0;
    box-shadow: 4px -2px 5px rgba(45, 45, 45, 0.2);
    padding: 2rem;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: inherit;
    }

    .maker {
      text-align: center;
      color: ${theme.buttonBg};
      margin-left: 4rem;
    }

    .container {
      display: flex;
      justify-content: space-between;
    }

    .socials,
    .footerLinks {
      display: flex;
      gap: 0.5rem;
    }

    .socials {
      gap: 2rem;

      a {
        transition: 250ms ease-in-out;
        &:hover {
          color: ${theme.buttonBg};
        }
      }
    }

    .footerLinks {
      justify-content: space-between;
      /* border: 1px solid red; */
    }

    .container,
    .footerLinks {
      display: flex;
      list-style-type: none;
    }

    @media (max-width: 700px) {
      .container,
      .footerLinks {
        display: flex;
        flex-direction: column;
      }

      .socials {
        display: flex;
      }

      .footerLinks,
      .socials {
        align-items: center;
      }

      .footerLinks {
        margin-top: 2rem;
      }
    }
  `
);
