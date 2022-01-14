import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    homeSection: {
        [theme.breakpoints.between('xs', 'sm')]: {
            marginTop: '0px'
        }
    },
    main_header_logo: {
        height: '30vh',
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '25vh'
        },
        display: 'flex',
        justifyContent: 'center',
    },
    home_button_group: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
    btn: {
        marginRight: '20px',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '100%',
        }
    },
    social_icons_div: {
        marginTop: '20px',
    }
}))