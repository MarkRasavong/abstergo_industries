import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    animus_logo_size: {
        height: '10vh',
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '5vh',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '4vh',
        }
    },
    animus_1pic_size: {
        marginTop: '2vh',
        marginBottom: '2vh',
        height: '50vh',
        [theme.breakpoints.between("xs", "sm")]: {
            height: '35vh',
        }
    },
    animus_1pic_div: {
        display: 'flex',
        justifyContent: 'center',
    },
    earlyAccess_cta_btn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2vh',
    },
    animusVideoDiv: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3vh'
    }
}))