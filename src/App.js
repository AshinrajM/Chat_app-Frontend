import './App.css';
import Login from './Components/Login';
import Navigate from './Components/Navigate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Sidebar from './Components/Sidebar';
import ChatArea from './Components/ChatArea';
import MessageInput from './Components/MessageInput';

function App() {
  return (
    <>
      <div className='chat-container'>
        <Sidebar />
        <ChatArea />
      </div>
      <MessageInput />
    </>
    // <BrowserRouter>
    //   <Navigate />
    //   <Routes>
    //     <Route path='/login' element={<Login />}></Route>
    //     <Route path='/register' element={<Register />}></Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
