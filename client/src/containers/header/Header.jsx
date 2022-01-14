import React from 'react';
import { Button, Fab, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import abstergoColorLogo from '../../assets/abstergo-color-logo.png';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';


const Header = () => {
    const classes = useStyles();

    return (
        <section id='home'>
            <Grid container direction='row' justifyContent='center' alignItems='center' className={`${classes.homeSection} section__padding`}>
                <Grid item xs={12} sm={4}>
                    <img alt='Abstergo Color Logo' src={abstergoColorLogo} className={classes.main_header_logo} />
                </Grid>
                <Grid item xs={10} sm={8}>
                    <Typography variant='h2'>
                        Live Better.
                    </Typography>
                    <Grid item xs={12}>
                        <Typography>
                            Abstergo is a leader in pharmaceutical technologies, entertainment, and research helping and entertaining people around the world.
                                <br />
                        </Typography>
                    </Grid>
                </Grid>
                    <Grid container justifyContent='center'>
                        <Grid item xs={12} sm={3} className={classes.home_button_group}>
                            <Button href='/#about' className={classes.btn} variant='contained' color='primary'>About Abstergo</Button>
                        </Grid>
                        <Grid item xs={12} sm={3} className={classes.home_button_group}>
                            <Button href='/#animus' className={classes.btn} variant='contained' color='secondary'>Discover The Animus</Button>
                        </Grid>
                        <Grid item xs={12} sm={3} className={classes.home_button_group}>
                            <Button className={classes.btn} href='/#helix' variant='contained' color='secondary'>Discover Helix</Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='center' className={classes.social_icons_div}>
                        <Fab color='secondary' aria-label='facebookLink' href={'https://www.facebook.com/abstergoinc/'} style={{ margin: '0 1em  0 0' }}>
                            <AiFillFacebook size={'2.5em'} color='white'/>
                        </Fab>
                        <Fab color='secondary' aria-label='twitterLink' href={'https://twitter.com/abstergo_corp'} style={{ margin: '0 1em 0 0' }}>
                            <FaTwitterSquare size={'2.5em'} color='white'/>
                        </Fab>
                        <Fab color='secondary' aria-label='youtubeLink' href={'https://www.youtube.com/channel/UCVL8NH7nuj4ctBouc7KUf3A'}>
                            <AiFillYoutube size={'2.5em'} color='white'/>
                        </Fab>
                    </Grid>
            </Grid>
        </section>
    )
}

export default Header
