import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import abstergoIndustriesColorImg from '../../assets/abstergo-2.png';
import useStyles from './styles';

const JoinAbstergo = () => {
    const classes = useStyles();

    return (
        <section id='join-abstergo'>
            <Paper elevation={8} className={`section__padding ${classes.section_background}`}>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h4'>Join</Typography>
                        <img className={classes.abstergoColorLogo} src={abstergoIndustriesColorImg} alt='abstergo color logo' />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant='h6'>From hygeiene techicians to being a member of our world renowned team of reserachers, 
                        Abstergo Industries are always searching for new talent and offer applicants growth in their carrer paths. Apply now for an opportunity to join and make the world <strong>live better.</strong></Typography>
                    </Grid>
                </Grid>
                <div className={classes.apply_cta_btn}>
                        <Button variant='outlined' color='secondary'size='large' href='/employment-app'>Apply Now!</Button>
                    </div>
            </Paper>
        </section>
    )
}

export default JoinAbstergo
