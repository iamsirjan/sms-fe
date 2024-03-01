import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { codeHimalaya_colors } from './color';

const baseStyles = {
  px: 4,
  borderRadius: '2xl',
  transition: 'all 300ms ease-in-out',
};

const primary = defineStyle({
  background: codeHimalaya_colors.primary[500],
  color: 'white',
  _disabled: {
    background: `${codeHimalaya_colors.primary[500]} !important`,
    color: `white !important`,
  },
  _hover: {
    background: 'primary.400',
  },
  ...baseStyles,
});

const outline = defineStyle({
  ...baseStyles,
  color: codeHimalaya_colors.primary[500],
  _disabled: {
    background: `${codeHimalaya_colors.primary[500]} !important`,
    color: `white !important`,
  },
  _hover: {
    background: 'transparent',
  },
  border: `1px solid ${codeHimalaya_colors.primary[500]} !important`,
});

export const buttonTheme = defineStyleConfig({
  variants: {
    primary,
    outline,
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
  defaultProps: { variant: 'primary', size: 'lg' },
});
