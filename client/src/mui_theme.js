import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: 'rgba(93,213,186,0)',
        },
        secondary: {
            main: '#5dd5ca',
        },
        error: {
            main: '#ff3b1d',
        },
    },
    typography: {
        fontFamily: 'Open Sans',
    },
});