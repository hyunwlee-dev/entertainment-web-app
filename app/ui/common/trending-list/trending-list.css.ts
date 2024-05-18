import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const trending = style({
  marginTop: '1.5rem',
  '@media': {
    [$breakpoints.tablet]: {
      marginTop: '2.063rem',
    },
    [$breakpoints.laptop]: {
      width: '1024px',
      marginTop: '0',
      position: 'absolute',
      top: '8.125rem',
    }
  }
});

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

const skeletonHeading = style({
  width: '76px',
  height: '30px',
  marginBottom: '1.5rem',
  '@media': {
    [$breakpoints.tablet]: {
      marginBottom: '1.7rem',
      width: '122px',
      height: '40px',
    }
  }
});

const skeletonCarousel = style({
  overflow: 'hidden',
  width: '344px',
  height: '140px',
  display: 'flex',
  flexFlow: 'row nowrap',
  columnGap: '16px',
  '@media': {
    [$breakpoints.tablet]: {
      columnGap: '40px',
      width: '719px',
      height: '230px',
    },
    [$breakpoints.laptop]: {
      columnGap: '40px',
      width: '1240px',
    }
  }
});

const skeletonItem = style({
  width: '240px',
  height: '140px',
  '@media': {
    [$breakpoints.tablet]: {
      width: '470px',
      height: '230px',
    }
  }
});

const styles = {
  trending,
  heading,
  skeletonHeading,
  skeletonCarousel,
  skeletonItem
};

export default styles;
