import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { codeHimalaya_colors } from './color';

const baseStyles = {
  px: 4,
  borderRadius: '2xl',
  transition: 'all 300ms ease-in-out',
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
