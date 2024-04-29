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
    headingL: "300 32px sans-serif",
    headingM: "300 24px sans-serif",
    headingS: "500 24px sans-serif",
    headingXS: "500 18px sans-serif",
    bodyM: "300 15px sans-serif",
    bodyS: "300 13px sans-serif",
  }
});
