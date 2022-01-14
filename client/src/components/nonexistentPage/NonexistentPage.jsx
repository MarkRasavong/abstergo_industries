import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import abstergoColorLogo from '../../assets/abstergo-color-logo.png';
import useStyles from './styles';

const NonexistentPage = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent='center' className={`section__padding`}>
            <Grid item>
                <Typography variant='h1'>ERROR 404: Invalid URL</Typography>
                <Typography variant='body2'>Please navigate back home or naviage to another valid URL.</Typography>
                <Button variant='contained' color='primary' href='/'>Go Home</Button>
            </Grid>
            <Grid container justifyContent='center'>
                <img src={abstergoColorLogo} className={classes.colorLogo} alt='Abstergo Color Logo' />
            </Grid>
        </Grid>
    )
}

export default NonexistentPage;
