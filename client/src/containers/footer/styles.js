import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        textAlign: 'center',
        width: '100%',
    },
    footer_background: {
        /* ff 3.6+ */
        background: '-moz-linear-gradient(179deg, rgba(250, 250, 250, 1) 78%, rgba(93, 213, 202, 1) 100%)',

        /* safari 5.1+,chrome 10+ */
        background: '-webkit-linear-gradient(179deg, rgba(250, 250, 250, 1) 78%, rgba(93, 213, 202, 1) 100%)',

        /* opera 11.10+ */
        background: '-o-linear-gradient(179deg, rgba(250, 250, 250, 1) 78%, rgba(93, 213, 202, 1) 100%)',

        /* ie 6-9 */
        filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#5DD5CA', endColorstr='#FAFAFA', GradientType=1 )",

        /* ie 10+ */
        background: '-ms-linear-gradient(179deg, rgba(250, 250, 250, 1) 78%, rgba(93, 213, 202, 1) 100%)',

        /* global 94%+ browsers support */
        background: 'linear-gradient(179deg, rgba(250, 250, 250, 1) 78%, rgba(93, 213, 202, 1) 100%)',
    }
}));