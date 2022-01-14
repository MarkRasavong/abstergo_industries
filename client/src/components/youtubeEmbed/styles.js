import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    videoRepsonsive: {
        overflow: 'hidden',
        paddingBottom: '56.25%',
        position: 'relative',
        height: '0',
    },
    videoRepsonsiveIframe: {
        left: '0',
        top: '0',
        height: '50vh',
        width: '50vw',
    }
}))