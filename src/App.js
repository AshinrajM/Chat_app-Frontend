import './App.css';
import Login from './Components/Login';
import Navigate from './Components/Navigate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import ChatPage from './Components/ChatPage';

function App() {
  return (

    <BrowserRouter>
      <Navigate />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/chat' element={<ChatPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
