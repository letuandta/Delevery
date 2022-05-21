import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Base from './Layout/Base';
import Introduce from './Component/introduce';
import "./App.css"
import ShipperPage from './Component/ShipperPage';
import CustomerPage from './Component/CustomerPage';
import CreateOrder from './Component/CreateOrder';
import OrderPage from './Component/OrderPage';
import RegisterShipper from './Component/RegisterShipper';
import RegisterCustomer from './Component/RegisterCustomer';
import Product from './Component/Product';
import Profile from './Component/Profile';
import Order from './Component/Order';
import OrderAutionShipper from './Component/OrderAutionShipper';
import OrderDetail from './Component/OrderDetail';
import OrderDelivering from './Component/OrderDelivering';


const App = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Base/>}>
            <Route path='/' element={<Introduce/>}/>
            <Route path="/shipper/:id" element= {<ShipperPage/>}>
                  <Route path='/shipper/:id' element={<Product/>}/>
                  <Route path='profile' element={<Profile/>}/>
                  <Route path='order/:orderId/order' element={<Order/>}/>
                  <Route path='orderAution'element={<OrderAutionShipper/>}/>
                  <Route path='orderDelivering'element={<OrderDelivering status={2}/>}/>
                  <Route path='orderDelivered'element={<OrderDelivering status={3}/>}/>
            </Route>
            <Route path="/customer/:id" element= {<CustomerPage/>}>
                  <Route path='create-order' element={<CreateOrder/>}/>
                  <Route path='/customer/:id' element={<OrderPage status={1}/>}/>
                  <Route path='/customer/:id/all' element={<OrderPage/>}/>
                  <Route path='/customer/:id/delivering' element={<OrderPage status={2}/>}/>
                  <Route path='/customer/:id/delivered' element={<OrderPage status={3}/>}/>
                  <Route path='order/:orderID'element={<OrderDetail status={1}/>}/>
                  <Route path='order/:orderID/status_2_3'element={<OrderDetail status={2}/>}/>
            </Route>
            <Route path="/register-shipper" element= {<RegisterShipper/>}/>
            <Route path="/register-customer" element= {<RegisterCustomer/>}/>
            {/* <Route path='/shipper-profile/:id'/> */}
          </Route> 
            <Route path='/login' element={<Login/>}>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App