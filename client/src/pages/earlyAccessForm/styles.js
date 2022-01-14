import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        padding: theme.spacing(2)
    },
    abstergoLogo: {
        display: 'flex',
        justifyContent: 'center',
        height: '30vh',
        margin: theme.spacing(1),
    },
    submit: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    form: {
        margin: theme.spacing(3, 0, 2),
    }
}));