import styled, { css } from "styled-components";
import { colors } from "./constants";

export const SHeader = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2.5fr 3.5fr;
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
        width: 350px;
      }
      .home__blob-img {
        width: 170px;
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
    height: 100vh;
    /* max-width: 768px; */
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
      display: flex;
      .image {
        width: 50%;
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
  () => css`
    // TBS
  `
);

export const SProjects = styled.div(
  () => css`
    // TBS
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

    .container,
    .footerLinks {
      display: flex;
      list-style-type: none;
    }
  `
);
