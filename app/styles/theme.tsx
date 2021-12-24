import {DefaultTheme} from 'styled-components/native';

const dark: DefaultTheme = {
  color: {
    main: '#2ae6ad',
    white: 'white',
    gray: 'gray',
    bg: 'black',
    button: 'white',
    buttonText: 'black',
  },
};

const light: DefaultTheme = {
  ...dark,
  color: {
    main: '#00f2ab',
    white: 'white',
    gray: 'gray',
    bg: 'black',
    button: 'black',
    buttonText: 'white',
  },
};

export {dark, light};
