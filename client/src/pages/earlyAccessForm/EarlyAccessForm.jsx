import { Button, Container, Grid, InputLabel, Paper, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input';
import React, {useState} from 'react';
import AbstergoIndustries from '../../apis/AbstergoIndustries';
import useStyles from './styles';
import abstergoLogo from '../../assets/abstergo-color-logo.png';

const EarlyAccessForm = () => {
    const nav = useNavigate();
    const [ form, setForm ] = useState({first_name: '', surname: '', birthdate: '', email: '', confirmEmail: '' });
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/subscriptions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: form
            });
            nav("/sub-success");
          } catch (err) {
            console.error(err.message);
          }
    };

    const handleChange = e => {
        console.log(form);
        setForm({...form, [e.target.name] : e.target.value});
    }
    
    return (
        <Container component='main' maxWidth='sm'>
            <Grid container justifyContent='center'>
                <img className={classes.abstergoLogo} src={abstergoLogo} alt='Abstergo-2' />
            </Grid>
            <Paper elevation={6} className={`${classes.paper} section__padding`}>
                <Typography variant='h5'>Keep up to date with all our products and services.</Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container spacing={2}>
                        <Input label='First Name' name='first_name' type='text' onChange={handleChange}/>
                        <Input label='Surname' name='surname' type='text' onChange={handleChange}/>
                        <Grid item xs={12}>
                        <InputLabel>Birthdate</InputLabel>
                        <Input half name='birthdate' type='date' onChange={handleChange}/>
                        </Grid>
                        <Input label='Email' name='email' type='email' onChange={handleChange}/>
                        <Input label='Confirm Email' name='confirmEmail' type='email' onChange={handleChange}/>
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default EarlyAccessForm
