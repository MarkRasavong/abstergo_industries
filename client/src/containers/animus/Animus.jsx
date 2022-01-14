import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import animusLogo from '../../assets/animus-logo.png';
import animus_1 from '../../assets/animus-1.png';
import YoutubeEmbed from '../../components/youtubeEmbed/YoutubeEmbed';

const animusVideoLink = 'fBHle5j2JjE';

const Animus = () => {
    const classes = useStyles();


    return (
        <section id='animus'>
            <div className={`section__margin`}>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h4'>What is </Typography>
                        <div>
                        <img alt='ANIMUS LOGO' src={animusLogo} className={classes.animus_logo_size}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant='body1'>
                            In Abstergo, we have discovered that the double helix in DNA has a plethora of experiences, memories, and skill from a person's ancestry. In our labratories we are able to discover
                            what our ancestors experienced in their lives with the benefit with our present perspective. The Animus technology having access to <strong>genetic memory </strong>, we can help understand our past and today's society, help understand
                            our personal and general medical conditions, and ultimately make our world a better place simply by accessing memories from our ancestors. 
                        </Typography>
                    </Grid>
                </Grid>
                <div className={classes.animus_1pic_div}>
                        <img src={animus_1} alt='Animus 1' className={classes.animus_1pic_size}/>
                </div>
                <Typography variant='subtitle1'>
                    The first Animus product was only open to a few testsubjects. 
                    The Animus technology today now offers the expereince to millions of our potential customers through products offered by Abstergo Entertainment, Fitness, Medical, and Pharmaceuticals. 
                    The Animus continues to develop more interesting products and projects throughout the world. <strong>Do you want to keep updated in new projects?</strong>
                </Typography>
                <br />
                <Typography variant='h6'>Sign up for potential early access to our products and services.</Typography>
                <div className={classes.earlyAccess_cta_btn}>
                    <Button href='/#early-access' variant='outlined' color='secondary'size='large'>Sign Me Up</Button>
                </div>
                <div className={classes.animusVideoDiv}>
                    <YoutubeEmbed videoId={animusVideoLink} key={animusVideoLink}/>
                </div>
            </div>
        </section>
    )
}

export default Animus;
