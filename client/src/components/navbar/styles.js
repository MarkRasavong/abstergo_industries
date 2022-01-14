import { makeStyles } from "@material-ui/styles";
import { theme } from '../../mui_theme';

const useStyles = makeStyles((theme) => ({
    homeIcon: {
        height: '50px',
        margin: '0.5rem 0'
    },
    menuLink: {
        padding: "6px 16px",
        borderRadius: 0,
        transition: "background 1s, color 1s",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            display: "none"
        },
    },
    mobileCollapseButton: {
        [theme.breakpoints.between('md', 'xl')]: {
            display: 'none',
        }
    },
}
))

export default useStyles