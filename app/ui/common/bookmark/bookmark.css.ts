import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const bookmark = style({
  position: 'absolute',
  top: '8px',
  right: '8px',
  width: '32px',
  height: '32px',
  background: 'rgba(0, 0,0, 0.5)',
  borderRadius: '9999px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    [$breakpoints.tablet]: {
    },
    [$breakpoints.laptop]: {
    }
  }
});

const styles = {
  bookmark,
};

export default styles;
