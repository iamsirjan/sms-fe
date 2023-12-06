import { extendTheme } from '@chakra-ui/react';
import { asheshDon_colors } from './color';
import { buttonTheme } from './button';

export const theme = extendTheme({
  // components: {
  //   Button: {
  //     baseStyle: {
  //       fontWeight: "bold", // Normally, it is "semibold"
  //     },
  //     sizes: {
  //       xl: {
  //         h: "56px",
  //         fontSize: "lg",
  //         px: "32px",
  //       },
  //     },
  //     variants: {
  //       "with-shadow": {
  //         bg: "red.400",
  //         boxShadow: "0 0 2px 2px #efdfde",
  //       },
  //       // solid: (props: StyleFunctionProps) => ({
  //       //   bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
  //       // }),
  //       sm: {
  //         bg: "teal.500",
  //         fontSize: "md",
  //       },
  //     },
  //     defaultProps: {
  //       size: "lg", // default is md
  //       variant: "sm", // default is solid
  //       colorScheme: "green", // default is gray
  //     },
  //   },
  // },
  styles: {
    global: {
      body: {
        bgColor: asheshDon_colors.secondary,
        fontFamily: "'Urbanist', sans-serif",
      },
    },
  },
  a: {
    _hover: {
      textDecoration: 'none !important',
      outline: 'none !important',
      border: '0px !important',
    },
  },
  components: {
    Button: buttonTheme,
  },
});
