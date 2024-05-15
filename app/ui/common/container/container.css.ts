import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const container = style({
  margin: '0 auto',
  maxWidth: '344px',
  background: 'transparent',
  display: 'flex',
  flexFlow: 'nowrap column',
  alignItems: 'center',
  '@media': {
    [$breakpoints.tablet]: {
      maxWidth: '719px',
    },
    [$breakpoints.laptop]: {
      position: 'absolute',
      left: '10rem',
      maxWidth: '1249px',
    },
    ['screen and (min-width: 1580px)']: {
      position: 'static',
      margin: '0 auto',
    }
  }
});

const styles = { container };

export default styles;
