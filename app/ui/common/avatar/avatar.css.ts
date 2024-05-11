import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const avatar = style({
  border: `1px solid ${vars.color.pureWhite}`,
  borderRadius: '999px',
  '@media': {
    [$breakpoints.tablet]: {
      width: '2rem',
      height: '2rem',
    },
    [$breakpoints.laptop]: {
      width: '2.5rem',
      height: '2.5rem',
    }
  }
});

const styles = { avatar };

export default styles;
