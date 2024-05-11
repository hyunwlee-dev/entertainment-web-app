import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle('*, *::before, *::after', {
  boxSizing: "border-box",
  padding: "0",
  margin: "0",
});

globalStyle('html, body', {
  fontWeight: '500',
  fontSize: '16px',
  background: vars.color.darkBlue,
  color: vars.color.pureWhite
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none'
});

globalStyle('li', {
  listStyle: 'none'
});

globalStyle('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: vars.color.pureWhite
});
