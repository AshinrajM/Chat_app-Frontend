import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
    const [form, setForm] = useState({
        'email': '',
        'password': ''

    })

    const BASE_URL = 'http://127.0.0.1:8000'


    const handleFormSubmit = () => {

        fetch(`${BASE_URL}/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data, "response data")

            })
            .catch(error => {
                console.log(error, "found error")

            })

        console.log(form.email, form.password)
    }

    return (
        <div>
            <div className='h-screen'>
                <div className='container text-center  pt-5'>
                    <div className=''>
                        <TextField id="standard-basic" label="Email" type='email'
                            onChange={(e) => setForm({ ...form, email: e.target.value })} variant="standard" />
                    </div>
                    <div className='pt-3'>
                        <TextField id="standard-basic" label="Password" variant="standard" type='password'
                            onChange={(e) => setForm({ ...form, password: e.target.value })} />
                    </div>
                    <div className='mt-3 '>
                        <Button variant="contained" color='warning'
                            className=''
                            onClick={handleFormSubmit}>LogIn</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login