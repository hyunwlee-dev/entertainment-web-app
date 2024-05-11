import { vars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

const form = style({
  background: vars.color.semiDarkBlue,
  borderRadius: '10px',
  padding: '1.333rem',
  margin: '2.222rem 0 1.333rem',
  display: 'flex',
  flexFlow: 'column nowrap',
  // gap: '1.333rem',
});

const headingL = style({
  font: vars.font.headingL,
  marginBottom: '0.889rem'
});

const input = style({
  marginTop: '1.333rem',
  padding: '0 0 1rem 0.889rem',
  background: 'transparent',
  border: 'none',
  height: '2.05rem',
  borderBottom: `1px solid ${vars.color.greyishBlue}`,
  color: vars.color.pureWhite
});

const button = style({
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

const loginDescription = style({
  marginTop: '1.333rem',
  font: vars.font.bodyM,
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-evenly',
});

const loginLink = style({
  color: vars.color.red,
});

const error = style({
  height: '2.222rem',
  font: vars.font.bodyM,
  color: vars.color.red,
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center'
});

const disabled = style({
  cursor: 'not-allowed'
});

const styles = {
  headingL,
  form,
  input,
  srOnly,
  button,
  loginDescription,
  loginLink,
  error,
  disabled
};

export default styles;
