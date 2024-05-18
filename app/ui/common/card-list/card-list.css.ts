import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const cardList = style({
  marginTop: '1.5rem',
  '@media': {
    [$breakpoints.tablet]: {
      marginTop: '2.438rem',
    },
    [$breakpoints.laptop]: {
      marginTop: '0',
      position: 'absolute',
      top: '29.063rem',
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
      width: '1240px',
      columnGap: '2.5rem',
      rowGap: '1.5rem',
    }
  }
});

const skeletonHeading = style({
  width: '195px',
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

const skeletonItem = style({
  width: '164px',
  height: '154px',
  '@media': {
    [$breakpoints.tablet]: {
      width: '220px',
      height: '192px',
    },
    [$breakpoints.laptop]: {
      width: '280px',
      height: '226px',
    }
  }
});

const skeletonThumbnail = style({
  width: '164px',
  height: '110px',
  '@media': {
    [$breakpoints.tablet]: {
      width: '220px',
      height: '140px',
    },
    [$breakpoints.laptop]: {
      width: '280px',
      height: '174px',
    }
  }
});

const skeletonDescription = style({
  width: '100px',
  height: '14px',
  marginTop: '8px',
  '@media': {
    [$breakpoints.tablet]: {
      width: '137px',
      height: '16px',
    }
  }
});

const skeletonTitle = style({
  width: '75px',
  height: '18px',
  marginTop: '5px',
  '@media': {
    [$breakpoints.tablet]: {
      width: '100px',
      height: '23px',
    }
  }
});

const styles = {
  cardList,
  heading,
  list,
  skeletonHeading,
  skeletonItem,
  skeletonThumbnail,
  skeletonDescription,
  skeletonTitle
};

export default styles;
