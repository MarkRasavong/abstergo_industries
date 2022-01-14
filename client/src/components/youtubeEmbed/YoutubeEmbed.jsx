import React from 'react';
import useStyles from './styles';

const YoutubeEmbed = ({ videoId }) => {
    const classes = useStyles();
    return (
        <div className={classes.videoResponsive}>
            <iframe className={classes.videoRepsonsiveIframe} src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
    )
}

export default YoutubeEmbed;