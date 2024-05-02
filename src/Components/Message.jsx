import React from 'react'

export default function Message({ text, sent }) {

    const messageClass = sent ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <div className='message-bubble'>{text}</div>
        </div>
    )
}
