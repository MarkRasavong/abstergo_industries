import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles';
import abstergoColorLogo from '../../assets/abstergo-color-logo.png';

const SubSuccess = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container justifyContent='center'>
                <Typography variant='h3'>Subscribed!</Typography>
            </Grid>
            <Grid container justifyContent='center'>
                <div className={classes.imgDiv}>
                    <img src={abstergoColorLogo} alt='Abstergo Colour Logo' className={classes.logo} />
                </div>
                <Typography className={classes.subscriptionParagraph}> Congratulations! You willl be in the forefront of all new projects Abstergo will be working on. Stay tuned to your emails for our most recent information.</Typography>
            </Grid>
                <Grid container justifyContent='center'>        
                    <Button className={classes.btn} variant='contained' color="primary" href="/">Go Home</Button>
                </Grid>
        </Container>
    )
}


export default SubSuccess
