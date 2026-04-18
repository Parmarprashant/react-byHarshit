import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {Home, About, Products, AboutDetail, Login} from './index'
import RootLayout from './layouts/RootLayout';
import RequireAuth from './components/RequireAuth';
import AuthProvider from './context/AuthProvider';
import { fetchAbout } from './pages/About';
import { details } from './components/AboutDetail';
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element = {<Home/>} />
    <Route path='about' loader = {fetchAbout} element = {<RequireAuth><About/></RequireAuth>}></Route>
    <Route path='products' element = {<Products/>}/>
    <Route path='about/:id' loader = {details} element = {<RequireAuth><AboutDetail/></RequireAuth>}/>
    <Route path='*' element = {<h1>Error page</h1>}></Route>
    <Route path='login' element = {<Login/>}/>
  </Route>
    
    )

);


function App() {
  return (
    <div>
     <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      </AuthProvider> 
    </div>
  )
}

export default App