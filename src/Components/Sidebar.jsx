import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import axios from 'axios'
import { LinearProgress, List } from '@mui/material'
import UserItem from './UserItem'

function Sidebar() {

    const BASE_URL = 'http://127.0.0.1:8000'
    const [users, setUsers] = useState([])
    const [userLoader, setUseeLoader] = useState(false)

    useEffect(() => {

        const authToken = localStorage.getItem('token')
        console.log('check for sidebar')
        if (authToken) {
            axios.get(`${BASE_URL}/api/users`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then(response => {

                setUsers(response.data)
                console.log(response.data, "datas received")
            }).catch(error => {
                console.log("Error got in api call", error)
            })
        }
    }, [])
    console.log(users, "users list")
    return (

        <div className='sidebar'>
            {userLoader ? (<Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>) : (
                <List sx={{ width: '100%', maxWidth: 360, bgColor: 'background.paper' }}>
                    {users.map((user, index) => (
                        <UserItem  key={index} email={user.email} name={`${user.first_name} ${user.last_name}`}
                            id={user.id}></UserItem>
                    ))}
                </List>)
            }
        </div >
    )
}
export default Sidebar

