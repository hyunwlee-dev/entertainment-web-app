import { vars } from "@/app/styles/theme.css";
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

const description = style({
  marginTop: '0.5rem',
  fontSize: '11px',
  fontWeight: 300,
  '@media': {
    [$breakpoints.tablet]: {
      font: vars.font.bodyS
    }
  }
});

const title = style({
  fontSize: '14px',
  fontWeight: 500,
  '@media': {
    [$breakpoints.tablet]: {
      font: vars.font.headingXS
    }
  }
});

const inner = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
});

const categoryIcon = style({
  transform: 'scale(0.5) translateY(1.5px)',
  '@media': {
    [$breakpoints.tablet]: {
      transform: 'scale(0.6) translateY(2.5px)',
    }
  }
});

const ovalLt = style({
  margin: '0 4px 0 7px',
});

const ovalRt = style({
  margin: '0 7px 0 4px',
});

const styles = {
  item,
  thumbnail,
  image,
  description,
  title,
  inner,
  categoryIcon,
  ovalLt,
  ovalRt
};

export default styles;
