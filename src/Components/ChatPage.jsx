import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'


const ChatPage = () => {

    const [rerenderCount, setRerenderCount] = useState(0);

    const triggerRerender = () => {
        setRerenderCount(prevCount => prevCount + 1);
    };

    useState(() => {
        triggerRerender();
    }, []);

    return (
        <>
            <div className='flex h-screen'>
                <Sidebar />
                <ChatArea />
            </div>
        </>
    )
}

export default ChatPage