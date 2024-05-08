import { vars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

const board = style({
  background: vars.color.semiDarkBlue,
  borderRadius: '10px',
  padding: '1.333rem',
  position: 'relative'
});

const headingL = style({
  font: vars.font.headingL,
});

const form = style({
  margin: '2.222rem 0 1.333rem',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '1.333rem',
});

const input = style({
  padding: '0 0 1rem 0.889rem',
  background: 'transparent',
  border: 'none',
  height: '2.05rem',
  borderBottom: `1px solid ${vars.color.greyishBlue}`,
  color: vars.color.pureWhite
});

const button = style({
  marginTop: '0.889rem',
});

const srOnly = style({
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'circle(0)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  whiteSpace: 'nowrap'
});

const signupDescription = style({
  font: vars.font.bodyM,
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-evenly',
});

const signupLink = style({
  color: vars.color.red,
});

const error = style({
  position: 'absolute',
  font: vars.font.bodyM,
  inset: '0',
  top: '12rem',
  left: '1.333rem',
  color: vars.color.red,
});

const styles = {
  board,
  headingL,
  form,
  input,
  srOnly,
  button,
  signupDescription,
  signupLink,
  error
};

export default styles;
