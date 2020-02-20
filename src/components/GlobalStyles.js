import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color : inherit;
    }
    * {
        box-sizing : border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #333;
    }
    
`;

export default globalStyles;
