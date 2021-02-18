import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const ResumeWrapper = styled.div`
  max-width: 75em;
  margin: 0 auto;
`;