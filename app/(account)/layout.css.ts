import { style } from "@vanilla-extract/css";

const main = style({
  margin: '0 auto',
  maxWidth: '344px',
  background: 'transparent',
  display: 'flex',
  flexFlow: 'nowrap column',
  alignItems: 'center',

});

const logo = style({
  margin: '2.667rem 0 3.244rem',
});

const styles = {
  main,
  logo
};

export default styles;
