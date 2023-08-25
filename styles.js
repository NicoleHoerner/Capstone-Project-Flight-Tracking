import { createGlobalStyle } from "styled-components";
import { Varela_Round } from "next/font/google";

const varelaRound = Varela_Round({ weight: "400", subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    font-family: ${varelaRound.style.fontFamily};
  }

  body {
    margin: 0;
    font-family: var(--font-varela);
  }
`;
