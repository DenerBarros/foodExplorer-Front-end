import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BG_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }
  body * {
    font-family: 'Roboto', sans-serif;
    outline: none;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  button, a {
    cursor: pointer;
    transition: filter(0.2s);
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
  
`;