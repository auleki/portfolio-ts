import styled, { css } from "styled-components";
import { colors } from "./constants";

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
    width: 100%;
    .aboutMe {
      display: flex;
      .image {
        width: 50%;
      }
    }
  `
);
