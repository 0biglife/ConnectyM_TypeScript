import {DefaultTheme} from 'styled-components/native';

const dark: DefaultTheme = {
  color: {
    main: '#2ae6ad',
    white: 'white',
    gray: 'gray',
    bg: 'black',
  },
};

const light: DefaultTheme = {
  ...dark,
  color: {
    main: '#00f2ab',
    white: 'white',
    gray: 'gray',
    bg: 'white',
  },
};

export {dark, light};
