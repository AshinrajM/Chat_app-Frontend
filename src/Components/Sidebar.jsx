import React, { useEffect, useState } from 'react'
import withAuthentication from '../utils/withAuthentication'
import axios from 'axios'
import { LinearProgress, List } from '@mui/material'

function Sidebar() {

    const BASE_URL = 'http://127.0.0.1:8000'
    const [users, setUsers] = useState([])
    const [userLoader, setUseeLoader] = useState(true)

    useEffect(() => {

        const authToken = localStorage.getItem('token')
        console.log('check for sidebar')
        if (authToken) {
            axios.get(`${BASE_URL}/api/users`, {
                headers: {
                    Authorization: `Bearer${authToken}`
                }
            }).then(response => {

                setUsers(response.data)
                console.log(users, "datas received")
            }).catch(error => {
                console.log("Error got in api call", error)
            })
        }
    }, [])

    return (

        <div className='sidebar'>
            {userLoader ? (<Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>) : (
                (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }})
                {users.map((user, index) => ())}
            )
            
            }
        </div>
    )
}
export default Sidebar

