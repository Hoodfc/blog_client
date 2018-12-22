import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    common: {
      black: 'rgba(19, 19, 19, 1)',
      white: 'rgba(251, 244, 244, 1)'
    },
    background: {
      paper: 'rgba(251, 244, 244, 1)',
      default: 'rgba(251, 244, 244, 1)'
    },
    primary: {
      light: 'rgba(221, 115, 98, 1)',
      main: 'rgba(209, 63, 50, 1)',
      dark: 'rgba(183, 90, 75, 1)',
      contrastText: '#fff'
    },
    secondary: {
      light: 'rgba(182, 140, 129, 1)',
      main: 'rgba(43, 35, 36, 1)',
      dark: 'rgba(25, 21, 22, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  }
});
