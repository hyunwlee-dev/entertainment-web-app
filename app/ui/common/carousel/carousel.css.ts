import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const embla = style({
  overflow: 'hidden',
  width: '344px',
  height: '140px',
  '@media': {
    [$breakpoints.tablet]: {
      width: '719px',
      height: '230px',
    },
    [$breakpoints.laptop]: {
      position: 'absolute',
      width: '1240px',
    }
  }

});

const emblaContainer = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  columnGap: '1rem',
  width: '100%',
  height: '100%',
  '@media': {
    [$breakpoints.tablet]: {
      columnGap: '2.5rem',
    },
  }
});

const emblaSlide = style({
  position: 'relative',
  flex: '0 0 240px',
  height: '100%',
  width: '100%',
  '@media': {
    [$breakpoints.tablet]: {
      flex: '0 0 470px',
    },
  }
});

const image = style({
  position: 'absolute',
  objectFit: 'cover',
  borderRadius: '8px',
});

const description = style({
  position: 'absolute',
  bottom: '1rem',
  left: '1rem',
});

const styles = {
  embla,
  emblaContainer,
  emblaSlide,
  image,
  description,
};

export default styles;
