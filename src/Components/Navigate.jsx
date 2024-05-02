import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigate() {
    return (
        <div className='flex'>
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
        </div>
    )
}
