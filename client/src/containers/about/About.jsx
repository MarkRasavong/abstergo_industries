import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import YoutubeEmbed from '../../components/youtubeEmbed/YoutubeEmbed';
import useStyles from './styles';

let currentYear = new Date().getFullYear() - 1937;
const aboutLink = 'BPrdxBp0nVQ?start=8';

const About = () => {
    const classes = useStyles();

    return (
        <section id='about'>
            <Paper elevation={8} className={`section__padding`}>
                <Typography variant='h4' className={classes.aboutTitle} >About Abstergo Industries</Typography>
                <Typography variant='body1'>
                Founded in 1937, Abstergo Industries has provided the world with groundbreaking and advanced innovations in health, entertainment, and science for { currentYear } years to our customers.
                For { currentYear } years, the world has witnessed Abstergo's limitless imagination and ambition, our international celebrity have flourished in the last two decades. Our labratories and offices 
                can be found in every major city in the world and are set to expand even further with new projects and technologies to provide to our customers. 
                From exploring the mysterious depths of the galaxy, to helping people recover to diseases, Abstergo Industries is here to help you <strong>Live Better.</strong>
                </Typography>
                    <div className={classes.aboutVideo}>
                        <YoutubeEmbed videoId={aboutLink} key={aboutLink}/>
                    </div>
                    <br/>
                        <strong>Are you a researcher in Biotechnology? Engineering? or Medicine? Contribute to a better world and join Abstergo!</strong>
                    <div className={classes.researchCta}>
                        <Button href='/#join-abstergo' variant='contained' color='secondary'>Learn More</Button>
                    </div>
            </Paper>
        </section>
    )
}

export default About
