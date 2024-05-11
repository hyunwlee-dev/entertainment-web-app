import { vars } from "@/app/styles/theme.css";
import { $breakpoints } from "@/app/styles/utils";
import { style } from "@vanilla-extract/css";

const wrapper = style({
  width: '100%',
  padding: '0 1rem',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: vars.color.semiDarkBlue,
  height: '4rem',
  '@media': {
    [$breakpoints.tablet]: {
      maxWidth: '719px',
      margin: '1.5rem auto',
      padding: '0 1.5rem',
      height: '4.5rem',
      borderRadius: '10px',
    },
    [$breakpoints.laptop]: {
      position: 'fixed',
      height: 'calc(100% - 4rem)',
      width: '6rem',
      margin: '2rem',
      padding: '2.25rem 0',
      flexFlow: 'column nowrap',
      borderRadius: '20px',
    }
  }
});

const list = style({
  width: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  columnGap: '1.5rem',
  '@media': {
    [$breakpoints.tablet]: {
      columnGap: '2rem',
    },
    [$breakpoints.laptop]: {
      position: 'absolute',
      top: '8.5rem',
      flexFlow: 'column nowrap',
      rowGap: '2.5rem',
      alignItems: 'center',
    }
  },
});

const icon = style({
  transform: 'scale(0.8)',
  '@media': {
    [$breakpoints.tablet]: {
      transform: 'scale(1)'
    }
  }
});

const signOut = style({
  marginRight: '1rem',
  '@media': {
    [$breakpoints.laptop]: {
      marginRight: '0',
      position: 'absolute',
      left: '50%',
      bottom: '6rem',
      transform: 'translateX(-50%)'
    }
  }
});

const styles = {
  wrapper,
  list,
  icon,
  signOut
};

export default styles;
