import {
  createThemeContract,
  createGlobalTheme,
} from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    pureWhite: null,
    red: null,
    darkBlue: null,
    greyishBlue: null,
    semiDarkBlue: null,
  },
  font: {
    headingL: null,
    headingM: null,
    headingS: null,
    headingXS: null,
    bodyM: null,
    bodyS: null,
  }
});

createGlobalTheme(":root", vars, {
  color: {
    pureWhite: "#FFFFFF",
    red: "#FC4747",
    darkBlue: "#10141E",
    greyishBlue: "#5A698F",
    semiDarkBlue: "#161D2F",
  },
  font: {
    headingL: "light 32px",
    headingM: "light 24px",
    headingS: "medium 24px",
    headingXS: "medium 18px",
    bodyM: "light 15px",
    bodyS: "light 13px",
  }
});
