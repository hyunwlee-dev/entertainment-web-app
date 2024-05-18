import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const form = style({
  marginTop: '1.5rem',
  height: '1.5rem',
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  '@media': {
    [$breakpoints.tablet]: {
      marginTop: '2.063rem',
    },
    [$breakpoints.laptop]: {
      marginTop: '0',
      position: 'absolute',
      top: '4rem',
      minWidth: '1240px',
    }
  }
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

const searchIcon = style({
  transform: 'scale(0.75) translateX(-0.5rem)',
  '@media': {
    [$breakpoints.tablet]: {
      transform: 'scale(1)',
    }
  }
});

const input = style({
  width: '100%',
  border: 'none',
  background: 'transparent',
  color: vars.color.pureWhite,
  padding: '1rem 0.5rem',
  fontWeight: '300',
  '@media': {
    [$breakpoints.tablet]: {
      padding: '1rem 1.5rem',
      font: vars.font.headingM
    }
  }
});

const styles = {
  form,
  srOnly,
  searchIcon,
  input,
};

export default styles;
