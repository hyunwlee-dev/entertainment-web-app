import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const heading = style({
  width: '100%',
  font: vars.font.title,
  marginBottom: '1.5rem',
  '@media': {
    [$breakpoints.tablet]: {
      font: vars.font.headingL,
    }
  }
});

const list = style({
  width: '344px',
  display: 'flex',
  flexFlow: 'row wrap',
  columnGap: '1rem',
  rowGap: '1rem',
  '@media': {
    [$breakpoints.tablet]: {
      width: '719px',
      columnGap: '1.813rem',
      rowGap: '1.5rem',
    },
    [$breakpoints.laptop]: {
      width: '1249px',
      columnGap: '2.5rem',
      rowGap: '1.5rem',
    }
  }
});

const styles = {
  heading,
  list,
};

export default styles;
