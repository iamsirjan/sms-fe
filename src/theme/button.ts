import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { codeHimalaya_colors } from './color';

const baseStyles = {
  px: 3,
  py: 4,
  borderRadius: 8,
};

const primary = defineStyle({
  background: codeHimalaya_colors.primary,
  color: codeHimalaya_colors.white,
  // transition: "all 300ms ease-in-out",
  ...baseStyles,
  _disabled: {
    background: `${codeHimalaya_colors.primary} !important`,
    color: `${codeHimalaya_colors.white} !important`,
  },
  _hover: {
    background: codeHimalaya_colors.secondary,
    color: codeHimalaya_colors.primary,
    // border: "1px !important",
  },
});

const primaryLarge = defineStyle({
  ...primary,
  _hover: {
    background: codeHimalaya_colors.secondary,
    color: codeHimalaya_colors.primary,
    border: '1px !important',
  },
});

const primaryOutline = defineStyle({
  border: `1px solid  ${codeHimalaya_colors.primary}`,
  color: codeHimalaya_colors.primary,
  ...baseStyles,
  _hover: {
    background: codeHimalaya_colors.secondary,
    color: codeHimalaya_colors.primary,
  },
});

const reset = defineStyle({
  background: codeHimalaya_colors.reset_btn_bg,
  color: codeHimalaya_colors.reset_btn_txt,
  ...baseStyles,
  // transition: "all 300ms ease-in-out",
  _hover: {
    background: codeHimalaya_colors.reset_btn_txt,
    color: codeHimalaya_colors.reset_btn_bg,
  },
});

const secondary = defineStyle({
  background: codeHimalaya_colors.secondary,
  color: codeHimalaya_colors.primary,
  ...baseStyles,
  transition: 'all 300ms ease-in-out',
  _hover: {
    background: codeHimalaya_colors.primary,
    color: codeHimalaya_colors.white,
    'svg path': {
      stroke: codeHimalaya_colors.white,
    },
  },
});

const ghost = defineStyle({
  ...baseStyles,
  _hover: {
    background: 'transparent',
    color: codeHimalaya_colors.primary,
  },
  _active: {
    background: 'transparent',
  },
});

const round = defineStyle({
  ...secondary,
  height: '34px',
  width: '34px',
  borderRadius: '50%',
});

export const buttonTheme = defineStyleConfig({
  variants: {
    primary,
    primaryLarge,
    reset,
    primaryOutline,
    secondary,
    round,
    ghost,
  },
  sizes: {
    sm: {
      height: '40px',
      fontSize: 14,
      fontWeight: '500',
      width: 97,
    },
    md: {
      height: 12,
      fontSize: 14,
      fontWeight: '500',
      width: 'fit-content',
    },
    fit: {
      height: '40px',
      fontSize: 14,
      fontWeight: '500',
      width: 'fit-content',
    },
    lg_fit: {
      height: '50px',
      fontSize: 16,
      fontWeight: '600',
      width: '100%',
    },
    lg: {
      height: '40px',
      fontSize: 16,
      fontWeight: '600',
      width: '317px',
    },
  },

  defaultProps: {
    size: 'sm',
    variant: 'primary',
  },
});
