import React, { useState } from 'react'
import { Button } from '@mui/material'

export default function MessageInput() {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSendMessage = () => {
        console.log("message send")
    }

    return (
        <div className='message-input'>
            <textarea placeholder='type message' value={inputValue} onChange={handleInputChange}></textarea>
            <Button onClick={handleSendMessage} color='primary' variant='contained'>Send</Button>
        </div>
    )
}
