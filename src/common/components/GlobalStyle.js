import { createGlobalStyle } from 'styled-components';

// import bgDark from '../../assets/bg-dark.png';
// background-image: url(${bgDark});

const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  body {
    flex-grow: 1;
    width: 100%;
    min-width: 320px;
    font-family: Roboto, 'Helvetica Neue', sans-serif;
    color: white;
    margin: 0;
    -ms-overflow-style: none;
    display: flex;
    flex-direction: column;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
