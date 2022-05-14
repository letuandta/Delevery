import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Base from './Layout/Base';
import Introduce from './Component/introduce';
import Register from './Component/Register';
import "./app.css"
import ShipperPage from './Component/ShipperPage';
import cookies from "react-cookies";


const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Base/>}>
            <Route path='/' element={<Introduce/>}/>
            <Route path="/shipper/:id" element= {<ShipperPage/>}/>
            <Route path="/customer/:id" element= {<ShipperPage/>}/>
            <Route path="/register-shipper" element= {<Register/>}/>
            <Route path="/register-customer" element= {<Register/>}/>
          </Route> 
            <Route path='/login' element={<Login/>}>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App