import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    helixVideoDiv: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3vh'
    },
    helixImg: {
        height: '34vh',
        marginLeft: '2vh',
        [theme.breakpoints.between('xs', 'sm')]: {
            display: 'none',
        },
    },
    cta: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2vh',
    },
    ctaBtn: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

