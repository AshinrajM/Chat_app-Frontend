import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

export default function Navigate() {

    const navigate = useNavigate()

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setIsAuthenticated(true)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
        window.location.reload()
    }
    return (
        <div className='flex gap-4 m-3'>
            {!isAuthenticated ? (
                <>
                    <Link to="/register">
                        <Button variant='contained'>Register</Button>
                    </Link>
                    <Link to="/">
                        <Button variant='contained'>Login</Button>
                    </Link>
                </>
            ) : null}
            {isAuthenticated ? (
                <Link to="/">
                    <Button variant='contained' onClick={handleLogout}>Logout</Button>
                </Link>
            ) : null}

        </div>
    )
}
