import styled, { css } from "styled-components";
// import { colors } from "./constants";

export const SHeader = styled.div(
  () => css`
    display: flex;
  `
);

export const SNavbar = styled.nav(
  () => css`
    display: flex;
    width: 100%;
    background: gainsboro;
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
  () => css`
    padding: 2rem 4rem;
    width: 100%;
    /* max-width: 768px; */
  `
);

export const SButton = styled.button(
  () => css`
    padding: 1rem 1.5rem;
    border: none;
    cursor: pointer;
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
  () => css`
    // TBS
  `
);
