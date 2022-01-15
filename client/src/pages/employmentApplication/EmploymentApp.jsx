import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import abstergoLogo from '../../assets/abstergo-2.png';
import { Button, Container, Grid, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core';
import Input from '../../components/input/Input';
import { Country, State } from 'country-state-city';
import EmploymentSuccess from '../../components/employmentSuccess/EmploymentSuccess';

const EmploymentApp = () => {
    const nav = useNavigate();
    const classes = useStyles();
    const [ countries, setCountries ] = useState([]);
    const [ countryCode, setCountryCode ] = useState('');
    const [ regions, setRegions ] = useState([]);
    const [ form, setForm ] = useState({
        first_name: '', surname:'', birthdate:'', email:'', contact_number:'',
            live_in_major_city:'false', city:'', subdivision:'', country:''
    });

    const fetchCountries = async () => {
        const countries = await Country.getAllCountries();
        setCountries(countries);
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchRegions = async (countryCode) => {
        const regions = await State.getStatesOfCountry(countryCode);
        setRegions(regions);
    };

    useEffect(() => {
        fetchRegions(countryCode);
    },[countryCode])



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = form;
            const res = await fetch("/applicants",{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            nav('/applicant-success')
        } catch (error) {
            console.log(error);
        }
    };

    const handleCountry = (e) => {
        setCountryCode(e.target.value);
        setForm({ ...form, [e.target.name] : e.target.value });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };


    return (
        <Container component='main' maxWidth='xs'>
            <Grid container justifyContent='center'>
                <img className={classes.abstergoLogo} src={abstergoLogo} alt='Abstergo-2' />
            </Grid>
            <Paper elevation={6} className={`${classes.paper} section__padding`}>
                <Typography variant='h5'>Employment Application Form</Typography>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container spacing={2}>
                        <Input label='First Name' name='first_name' type='text' onChange={handleChange}/>
                        <Input label='Surname' name='surname' type='text' onChange={handleChange}/>
                        <Grid item xs={12}>
                        <InputLabel>Birthdate</InputLabel>
                        <Input half name='birthdate' type='date' onChange={handleChange}/>
                        </Grid>
                        <Input half label='Email' name='email' type='email' onChange={handleChange}/>
                        <Input label='Contact Number' name='contact_number' type='tel' onChange={handleChange}/>
                        <Grid item xs={12} sm={6}> 
                            <InputLabel>Country</InputLabel>
                            <Select fullWidth name='country' label='Country' value={form.country} onChange={handleCountry}>
                                {
                                countries.map(country =>(
                                    <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
                                ))
                                }
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel>Region</InputLabel>
                            <Select fullWidth name='subdivision' label="Region" value={form.subdivision} onChange={handleChange}>
                                {
                                    regions.map(regione => (
                                        <MenuItem key={regione.isoCode} value={regione.name}>{regione.name}</MenuItem>
                                    ))
                                }
                            </Select>
                        </Grid>
                        <Input half label="City" name="city" type="text" onChange={handleChange} />
                        <Grid item xs={12}>
                            <InputLabel>Do you live in a major city?</InputLabel>
                            <Select fullWidth name='live_in_major_city' label='Do you live in a major city?' value={form.live_in_major_city} onChange={handleChange}>
                                <MenuItem key='no' value={"false"}>No</MenuItem>
                                <MenuItem key='yes' value={"true"}>Yes</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Container>
    )
    }

export default EmploymentApp
