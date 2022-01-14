import { Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles';

let currentYear = new Date().getFullYear(); 

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={`section__padding ${classes.footer_background}`}>
            <div className={classes.footer}>
                <p>{currentYear} Abstergo Industries</p>
            </div>
        </div>
    )
}

export default Footer
