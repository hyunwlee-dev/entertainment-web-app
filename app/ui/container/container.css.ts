import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const container = style({
  margin: '0 auto',
  maxWidth: '325px',
  background: 'transparent',
  display: 'flex',
  flexFlow: 'nowrap column',
  alignItems: 'center',
  '@media': {
    [$breakpoints.tablet]: {
      maxWidth: '400px',
    }
  }
});

const styles = { container };

export default styles;
