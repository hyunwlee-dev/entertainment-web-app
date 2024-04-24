import { globalStyle } from "@vanilla-extract/css";

globalStyle('*, *::before, *::after', {
  boxSizing: "border-box",
  padding: "0",
  margin: "0",
});

globalStyle('html, body', {
  fontWeight: '500',
  fontSize: '18px',
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
  cursor: 'pointer'
});
