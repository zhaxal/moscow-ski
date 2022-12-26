import { createTheme } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    desc: React.CSSProperties;
    heading: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    desc: React.CSSProperties;
    heading: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    register: true;
  }
}

const theme = createTheme({
  typography: {
    desc: {
      fontSize: "24px",
      lineHeight: "22.97px",
      fontFamily: "Gotham Pro Medium",
    },
    heading: {
        fontFamily: "Mossport",
        fontWeight: 400,
        fontSize: "56px",
        lineHeight: "56px"
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "register" },
          style: {
            background: "linear-gradient(90deg, #015B88 0%, #009DEC 100%)",
            borderRadius: "3px",
          },
        },
      ],
    },
  },
});

export default theme;
