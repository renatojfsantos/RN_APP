import {DefaultTheme} from 'styled-components';
import * as Colors from '../colors';
import {borders, spacing, typographyCommon} from './common';

export const themeLight: DefaultTheme = {
  colors: {
    primary: {
      main: Colors.brand01,
      onMain: Colors.white,
    },
    secondary: {
      main: Colors.brand02,
      onMain: Colors.white,
    },
    error: {
      main: Colors.red,
      onMain: Colors.white,
    },
    background: {
      main: Colors.white,
      onMain: Colors.black,
    },
    surface: {
      main: Colors.black,
      onMain: Colors.white,
    },
    surface500: {
      main: Colors.gray500,
      onMain: Colors.white,
    },
    surface600: {
      main: Colors.gray600,
      onMain: Colors.white,
    },
  },
  typography: typographyCommon,
  borders,
  spacing,
};
