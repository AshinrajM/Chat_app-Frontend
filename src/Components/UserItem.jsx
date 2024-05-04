import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function UserItem(props) {

    const userProfileUrl = `/user/${props.id}`

    return (
        <Link to={userProfileUrl}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <MdAccountCircle color='blue'/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.name} secondary={props.email}
                    primaryTypographyProps={{ style: { color: 'white' } }}
                    secondaryTypographyProps={{ style: { color: 'yellow' } }} />
            </ListItem>
        </Link>
    )
}
