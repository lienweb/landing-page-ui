import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-poppins)',
    body: 'var(--font-poppins)',
    mulish: 'var(--font-mulish)',
  },
  colors: {
    green: {
      50: '#E5F4F2',
      100: '#009379',
    },
    yellow: {
      100: '#F8D57E',
    },
    pink: {
      100: '#F2BFAF',
    },
    red: {
      100: '#FF6250',
    },
    gray: {
      50: '#F8F9FF',
      100: '#D8D8D8',
      900: '#2D2D2D',
    },
  },
});

export default theme;
