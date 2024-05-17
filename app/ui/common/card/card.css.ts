import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const item = style({
});

const thumbnail = style({
  display: 'inline-block',
  position: 'relative',
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

const image = style({
  position: 'absolute',
  objectFit: 'cover',
  borderRadius: '8px',
  height: '30px'
});

const styles = {
  item,
  thumbnail,
  image,
};

export default styles;
