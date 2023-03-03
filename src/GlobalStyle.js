import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #626465;
  }
  *{
    box-sizing: border-box;
  }
  iframe {
    overflow: hidden;
    pointer-events: none;
}
`;

export default GlobalStyles;
