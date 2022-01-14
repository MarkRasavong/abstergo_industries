import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    abstergoColorLogo: {
        height: '12vh',
        [theme.breakpoints.between("xs", "sm")]: {
            height: '7vh',
        },
        [theme.breakpoints.between("sm", "md")]: {
            height: '6.5vh',
        }
    },
    apply_cta_btn: {
        marginTop: '3vh',
        display: 'flex',
        justifyContent: 'center',
    },
}))