import {DefaultTheme} from 'styled-components/native';

const dark: DefaultTheme = {
  color: {
    main: '#2ae6ad',
    white: '#ffffff',
    bg: '#121212',
  },
};

const light: DefaultTheme = {
  ...dark,
  color: {
    main: '#00f2ab',
    white: '#ffffff',
    bg: '#ffffff',
  },
};

export {dark, light};
