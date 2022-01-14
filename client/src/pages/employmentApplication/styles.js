import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    abstergoLogo: {
        marginTop: '10vh',
        height: '25vh',
        [theme.breakpoints.between("xs", "sm")]: {
            height: "10vh",
        },
        [theme.breakpoints.between("sm", "md")]: {
            height: "20vh",
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
}));

