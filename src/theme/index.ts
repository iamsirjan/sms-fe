import { extendTheme } from '@chakra-ui/react';
import { codeHimalaya_colors as colors } from './color';
import { buttonTheme } from './button';
import { fontSizes } from './fontsize';

export const theme = extendTheme({
  fontSizes,
  colors,
  components: {
    Button: buttonTheme,
  },
});
