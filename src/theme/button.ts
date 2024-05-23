import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { codeHimalaya_colors } from './color';

const baseStyles = {
  borderRadius: '11px',
  transition: 'all 300ms ease-in-out',
  width: 'fit-content',
};

const primary = defineStyle({
  ...baseStyles,
  background: codeHimalaya_colors.primary[500],
  color: 'white',
  _hover: {
    background: 'primary.400',
    _disabled: {
      backgroundColor: `${codeHimalaya_colors.primary[500]} `,
    },
  },
});

const outline = defineStyle({
  ...baseStyles,
  color: codeHimalaya_colors.primary[500],
  _hover: {
    background: 'transparent',
  },
  borderColor: codeHimalaya_colors.primary[500],
});

const danger = defineStyle({
  ...baseStyles,
  background: codeHimalaya_colors.red[100],
  color: codeHimalaya_colors.white,
  border: '1px solid',

  _hover: {
    // background: codeHimalaya_colors.white,
    // color: codeHimalaya_colors.red[100],
    // border: '1px solid',
    // borderColor: codeHimalaya_colors.red[100],
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    primary,
    outline,
    danger,
  },
  sizes: {
    xs: {
      py: 1,
    },
    sm: {
      py: 2,
    },
    md: {
      py: 3,
    },
    lg: {
      py: 4,
    },
  },
  defaultProps: { variant: 'primary', size: 'md' },
});
