import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

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

const icon = style({
  transform: 'scale(0.78125)',
  '@media': {
    [$breakpoints.tablet]: {
      transform: 'scale(1)',
    }
  }
});

const styles = {
  srOnly,
  icon
};

export default styles;
