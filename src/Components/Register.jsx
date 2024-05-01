import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Register() {
    return (
        <>
            <div className='container text-center'>
                <div className='mt-3'>
                    <TextField id="standard-basic" label="Email" type='email' variant="standard" />
                </div>
                <div className='mt-3'>
                    <TextField id="standard-basic" label="First name" variant="standard" />
                </div>
                <div className='mt-3'>
                    <TextField id="standard-basic" label="Last Name" variant="standard" />
                </div>
                <div className='mt-3'>
                    <TextField id="standard-basic" label="Password" type='password' variant="standard" />
                </div>
                <div className='mt-3 '>
                    <Button variant="contained" color='primary'>Outlined</Button>
                </div>
            </div>
        </>
    )
}
