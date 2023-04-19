import React from 'react'
import Homecrud from './Components/Homecrud'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createusers from './Components/Createusers'
import Users from './Components/Users'
import EditUser from './Components/EditUser'
import DeleteUser from './Components/DeleteUser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App=()=> {
  return (
    <div>
        <BrowserRouter>
        <ToastContainer/>
        <Homecrud/>
        <Routes>
            <Route element={<Createusers/> } path="/"></Route>
            <Route element={<Users/>} path="/users"></Route>
            <Route element={<EditUser/>} path="/edit/:index"/>
            <Route element={<DeleteUser/>} path="/delete"/>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}
export default App
