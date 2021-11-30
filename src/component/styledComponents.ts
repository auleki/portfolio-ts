import styled, { css, keyframes } from "styled-components";
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
`

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Hover = keyframes`
  0% {
    color: ${colors.general.lightPurple}
    transform: translateY(0rem);
  }

  30% {
    color: ${colors.general.red};
    transform: translateY(-.3rem);
  }

  100% {
    color: ${colors.general.white};
    transform: translateY(0rem);
  }
`

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
  ({ theme }) => css`
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
        background: ${colors.general.fieldBg};
        color: ${colors.general.black};
        border-radius: .3rem;
        padding: .5rem;

        p:nth-child(1) {
          background: ${theme.buttonBg};
          color: ${theme.buttonText};
          margin-bottom: 1rem;
          border-top-left-radius: 6rem;
          border-top-right-radius: .2rem;
          border-bottom-right-radius: 6rem;
          border-bottom-left-radius: .2rem;
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
  ({ theme }) => css`
    margin: 1rem 0;
    /* border: 1px dashed orange; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25rem;
    color: ${theme.buttonText};
    background: ${theme.buttonBg};
    padding: 1rem;
    border-radius: .2rem;
    cursor: pointer;
    border-bottom: ${theme.border} .2rem solid;

   
    
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

       &:hover {
      .activeIndicator {
      /* transform: scale(1.5); */
      cursor: pointer;
      animation: ${Hover} 1s infinite;
        }
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
      cursor: pointer;
      transition: color 400ms ease-inherit;
      border-bottom: solid transparent .3rem;
      
      &:hover {
        /* color: ${colors.general.purple}; */
      }

      &.active {
        color: ${theme.tabTitleText};
        border-color: ${colors.general.gray};
      }

      h4 {
        font-weight: 400;
        font-size: 1.7rem;
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
      border-radius: .3rem;
      color: ${theme.cardText};
      box-shadow: 4px 4px 20px rgba(100, 105, 100, .2);
      width: 25rem;
      padding: 2rem;
      h4 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.2rem;
      }
    }
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
        border-radius: .3rem;
        label {
          font-size: .9rem;
        }
        input, textarea {
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
