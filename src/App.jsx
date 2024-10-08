
import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Home from './components/Home'
// import About from './components/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import NewProducts from './components/NewProducts'
import FeaturedProducts from './components/FeaturedProducts'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Profile from './components/Profile'
import AuthProvider from './components/auth.jsx'
import Login from './components/Login.jsx'
import RequireAuth from './components/RequireAuth.jsx'
const LazyAbout = React.lazy(() =>
  import('./components/About')
)

function App() {


  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='about' element={
          <React.Suspense fallback='loading'>
            <LazyAbout /></React.Suspense>} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userid' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
