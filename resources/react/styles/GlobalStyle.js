import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: none;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        
        -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
    }
    a {
        cursor: pointer;
        color: inherit;
        text-decoration: none;
    }
    button {
        cursor: pointer;
        border: none;
    }
    html, 
    body,
    #root {
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
