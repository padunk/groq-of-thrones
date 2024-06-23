import React from "react";
import { Global } from "@emotion/react";

export const Fonts = () => (
    <Global
        styles={`
    https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap

    @font-face {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
    `}
    />
);
