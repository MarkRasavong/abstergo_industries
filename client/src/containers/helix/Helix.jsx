import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';
import YoutubeEmbed from '../../components/youtubeEmbed/YoutubeEmbed';
import helixHeadset from '../../assets/helix.jpeg';
import useStyles from './styles';

const helixVideo = 'AWQPdM6q7Xc?start=4';

const Helix = () => {
    const classes = useStyles();

    return (
        <section id='helix'>
            <Paper elevation={8} className={`section__padding`}>
                <Typography variant='h4'>Helix</Typography>
                <Typography variant='body1'>
                    Helix is a game console introduced by Abstergo Entertainment for our consumers to experience amazing online video games based on our Animus technology. 
                    Users will experience an interactive video game utilizing your all your senses as if you were in the game real time. With experience, you will gain new skills,
                    new skins, and perks as you progress through the helix. Experience the pivotal moments of history in the comfort of your own home.
                </Typography>
                <div className={classes.helixVideoDiv}>
                    <YoutubeEmbed videoId={helixVideo} key={helixVideo} />
                    <img src={helixHeadset} alt='Helix VR Headset' className={classes.helixImg} />
                    <br />
                </div>

                <div className={classes.cta}>
                <Typography variant='body1'>
                    <strong>Keep updated on Helix updates and more products yet to be released! Sign Up Now!</strong>
                </Typography>
                </div>
                <div className={classes.ctaBtn}>
                    <Button variant='outlined' color='secondary'size='large'>Sign Me Up</Button>
                </div>
            </Paper>
        </section>
    )
}

export default Helix;
