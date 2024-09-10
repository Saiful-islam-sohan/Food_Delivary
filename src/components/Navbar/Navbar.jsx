

import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = ({setShowLogin}) => {
     
    const [menu, setMenu]= useState('Home')


  return (
    <div className='flex justify-between navbar justify-items-center'>
      <img src={assets.logo} alt="" className='h-[50px] w-[50px] sm:h-[50px] sm:w-[50px] md:h-[50px] md:w-[50px] md:mr-[30px]' />
      <ul className="justify-between text-lg italic md:flex navbar-menu gap-20px">
        <Link to="/"  onClick={()=>setMenu("Home")}  className={menu==="Home" ? "active" : " "}>Home</ Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")}  className={menu==="Menu" ? "active" : " "}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-app")}  className={menu==="Mobile-app" ? "active" : " "}>Mobile-app</a>
        <li  onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us" ? "active" : " "}>Contact-Us</li>
      </ul>
      <div className='items-center justify-between gap-4 md:flex navbar-right'>
        <img src={assets.search} alt="" className='md:w-[30px] h-[30px] sm:h-[20px] w-[20px]' />

        <div className="navbar-search-icon">
          <img src={assets.cart} alt="" className='w-[30px] h-[30px]'/>
          <div className="dot">

          </div>
        </div>
        <button onClick={()=>setShowLogin(true)} > Sing in</button>

      </div>
      
    </div>
  )
}

export default Navbar
