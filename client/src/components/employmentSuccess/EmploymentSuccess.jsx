import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react';
import abstergoOffices from '../../assets/abstergo-offices.jpeg';
import YoutubeEmbed from '../youtubeEmbed/YoutubeEmbed';
import useStyles from './styles';

const employeeVideo = 'To68wVYXZKo?t=6';

const EmploymentSuccess = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container justifyContent='center'>
                <Grid container justifyContent='center' xs={12}>
                    <Typography variant='h3'>Application Submitted</Typography>
                </Grid>
                <img src={abstergoOffices} alt='Abstergo Offices' className={classes.officeImage} />
                <Typography className={classes.applicationParagraph}>In a few days, we will review your details and we will contact you if you are the 
                    perfect candidate for our company. No need to send any CV, our algorithms can trace your data and capabilites for our company needs. 
                    Any curiosities please visit any of our offices in the major cities. Potential employees will recieve the following materials from us in the video below.
                </Typography>
                <YoutubeEmbed key={employeeVideo} videoId={employeeVideo} />
            </Grid>
            <Grid container justifyContent='center'>
                    <Button className={classes.btn} variant='contained' color="primary" href="/">Go Home</Button>
            </Grid>
        </Container>
    )
}

export default EmploymentSuccess
