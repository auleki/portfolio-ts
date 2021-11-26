import styled, { css } from "styled-components";
import { colors } from "./constants";

export const SHeader = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    place-items: center;

    h1 {
      font-size: 3.5rem;
    }

    .socialConnects {
      list-style-type: none;
      /* width: 20%; */
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

    a {
      text-decoration: none;
      color: inherit;
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
      }
    }

    @media (min-width: 851px) {
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
    }
  `
);

export const STitle = styled.h1(
  () => css`
    font-weight: 400;
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

export const PageContainer = styled.div(
  (props) => css`
    padding: 2rem 4rem;
    background: ${props.theme.body};
    color: ${props.theme.text};
    width: 100%;
    min-height: 100vh;
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

export const SAbout = styled.section(
  () => css`
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
          margin-bottom: 1rem;
        }
      }

      .statList,
      .stats,
      .actions {
        display: flex;
        margin-bottom: 1rem;
        justify-content: center;
      }

      .stats {
        flex-direction: column;
        justify-content: center;
      }

      .stat {
        text-align: center;
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
        }

        .image {
          width: 100%;
        }
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
  () => css`
    margin: 1rem 0;
    border: 1px dashed orange;

    .skill,
    .subSkills,
    .subSkill {
      display: flex;
    }

    .skill {
      gap: 2rem;
      margin-bottom: 1rem;
    }

    .experienceYears {
      font-size: 0.8rem;
    }

    .subSkills {
      /* gap: 2rem; */
      justify-content: space-between;
    }

    .subSkill {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  `
);

export const SQualifications = styled.section(
  () => css`
    // TBS
  `
);

export const SServices = styled.div(
  ({ theme }) => css`
    .services {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .textLink {
      cursor: pointer;
      transition: color 200ms ease-in;
      &:hover {
        color: ${theme.buttonBg};
      }
    }

    .service {
      width: 100%;
      padding: 1rem;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgb(0 0 0 / 15%);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .listingContainer {
      background-color: ${colors.general.white};
      color: ${theme.buttonBg};
      padding: 2rem 1rem;
      border-radius: 5px;
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
      background: #000000d0;

      li {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        /* line-height: 2.5rem; */
      }
    }

    @media (max-width: 627px) {
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
      box-shadow: 2px 4px 20px rgba(0, 0, 0, .2);
      transition: 400ms background ease-out, 400ms color ease-in;
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
        background: #DDDDDD67;
        right: 0;
        left: 0;             
        height:100%;
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
        /* cursor: pointer; */
        color: ${theme.buttonText};

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
  () => css`
    // TBS
  `
);

export const SFooter = styled.footer(
  ({ theme }) => css`
    background: ${theme.body};
    color: ${theme.text};
    position: relative;
    bottom: 0;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    /* align-items: center; */
    /* border-top: 2px solid ${colors.general.black}; */
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
