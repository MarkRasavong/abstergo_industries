import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react';
import useStyles from './styles';

const EarlyAccess = () => {
    const classes = useStyles();

    return (
        <section id='early-access' className={`${classes.section_background} section__padding`}>
            <div className={`${classes.earlyAccessTitle}`}>
            <Typography variant="h4">
                Early Access
            </Typography>
            </div>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h6'>
                        As technology grows exponentially, 
                        Abstergo is in the forefront of implementing new technologies 
                        into amazing products and research. 
                        Sign up for our potential products and services. 
                    </Typography>
                </Grid>
                    <Grid item xs={12} className={classes.earlyAccessBtnDiv}>
                        <Button variant='contained' color='primary' href={'/newsletter'}>Sign Up Now!</Button>
                    </Grid>
            </Grid>
        </section>
    )
}

export default EarlyAccess
