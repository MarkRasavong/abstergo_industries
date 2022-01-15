import { AppBar, Button, Grid, Link, Menu, MenuItem, Toolbar } from '@material-ui/core';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import React, { useState } from 'react';
import useStyles from './styles';
import abstergoLogo from '../../assets/abstergo-1.png';

const NavBar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);
    const classes = useStyles();

    const menuLinks = [
        { title: 'About Abstergo', href:'/#about'},
        { title: 'The Animus', href:'/#animus'},
        { title: 'Helix', href:'/#helix'},
        { title: 'Early Access', href:'/#early-access'},
        { title: 'Join Abstergo', href:'/#join-abstergo'}
    ];

    const handleClick = () => {
        setToggleMenu(!toggleMenu)
    };

    return (
            <AppBar position='static' style={{ backgroundColor: 'white' }}>
                <Toolbar>
                    <a href='/'><img src={abstergoLogo} alt='Abstergo Homepage Logo' className={classes.homeIcon}/></a>
                    <Grid container spacing={2} justifyContent='flex-end' >
                        <div className={classes.mobileCollapseButton}>
                            <Button aria-controls='basic-menu' aria-haspopup='true' aria-expanded={toggleMenu ? 'true' : undefined} onClick={handleClick}
                            >
                                { !toggleMenu ? <RiMenu3Line size={24} /> : <RiCloseLine size={24} />}
                            </Button>
                            <Menu open={toggleMenu ? true : false} onClose={() => setToggleMenu(false)}>
                                {
                                    menuLinks.map(({ title, href }) => (
                                        <MenuItem component={Button} onClick={() => setToggleMenu(false)} href={href} key={title}>{title}</MenuItem>
                                    ))
                                }
                            </Menu>
                         </div>
                        {
                            menuLinks.map(({ title, href }) => (
                                <Grid item className={classes.menuLink} key={title}>
                                    <Link underline='none' color='initial' component={Button} variant='body2' href={href}>{title}</Link>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
    )
}

export default NavBar
