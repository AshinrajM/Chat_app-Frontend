import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [form, setForm] = useState({
        'email': '',
        'first_name': '',
        'last_name': '',
        'password': ''
    })

    const navigate = useNavigate()

    const BASE_URL = 'http://127.0.0.1:8000'

    const handleFormSubmit = async () => {
        try {
            const response = await fetch(`${BASE_URL}/register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();
            console.log(data, "response data");
            navigate('/')

            // Clear the form fields after receiving a successful response
        } catch (error) {
            console.log(error, "found error");
        }
    }


    return (
        <div className=' h-screen'>
            <div className='container text-center  pt-5'>
                <div className=''>
                    <TextField id="standard-basic" label="Email" type='email'
                        onChange={(e) => setForm({ ...form, email: e.target.value })} variant="standard" />
                </div>
                <div className='pt-3'>
                    <TextField id="standard-basic" label="First name" variant="standard"
                        onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
                </div>
                <div className='mt-3'>
                    <TextField id="standard-basic" label="Last Name" variant="standard"
                        onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
                </div>
                <div className='mt-3'>
                    <TextField id="standard-basic" label="Password" type='password' variant="standard"
                        onChange={(e) => setForm({ ...form, password: e.target.value })} />
                </div>
                <div className='mt-3 '>
                    <Button variant="contained" color='warning'
                        className='hover:bg-white hover:text-black  hover:cursor-pointer'
                        onClick={handleFormSubmit}>SignUP</Button>
                </div>
                <p>{form.email}</p>
            </div>
        </div>
    )
}
