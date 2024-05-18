import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const container = style({
  margin: '0 auto',
  maxWidth: '344px',
  background: 'transparent',
  '@media': {
    [$breakpoints.tablet]: {
      maxWidth: '719px',
    },
    [$breakpoints.laptop]: {
      position: 'absolute',
      left: '10rem',
      maxWidth: '1240px',
    },
    ['screen and (min-width: 1580px)']: {
      position: 'static',
    }
  }
});

const styles = { container };

export default styles;
