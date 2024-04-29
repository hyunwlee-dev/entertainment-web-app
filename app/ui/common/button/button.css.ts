import { vars } from "@/app/styles/theme.css";
import { style } from "@vanilla-extract/css";

const button = style({
  width: '100%',
  height: '48px',
  borderRadius: '6px',
  background: vars.color.red,
  font: vars.font.bodyM
});

const styles = { button };

export default styles;
