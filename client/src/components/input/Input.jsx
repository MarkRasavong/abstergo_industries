import { Grid, TextField } from '@material-ui/core'
import React from 'react'

const Input = ({ half, name, label, autoFocus, type, onChange, value }) => {
    return (
        <Grid item xs={12} sm={half ? 12 : 6}>
            <TextField
            name={name}
            label={label}
            autoFocus={autoFocus}
            type={type}
            onChange={onChange}
            variant='outlined'
            fullWidth
            required
            value={value}
            />
        </Grid>
    )
};

export default Input
