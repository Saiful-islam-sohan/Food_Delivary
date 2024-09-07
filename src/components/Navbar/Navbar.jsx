

import { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'


const Navbar = () => {
     
    const [menu, setMenu]= useState('Home')


  return (
    <div className='navbar flex justify-between justify-items-center'>
      <img src={assets.logo} alt="" className='h-[50px] w-[50px]' />
      <ul className="navbar-menu flex gap-20px justify-between text-lg italic">
        <li  onClick={()=>setMenu("Home")}  className={menu==="Home" ? "active" : " "}>Home</ li>
        <li onClick={()=>setMenu("Menu")}  className={menu==="Menu" ? "active" : " "}>Menu</li>
        <li onClick={()=>setMenu("Mobile-app")}  className={menu==="Mobile-app" ? "active" : " "}>Mobile-app</li>
        <li  onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us" ? "active" : " "}>Contact-Us</li>
      </ul>
      <div className='navbar-right flex items-center justify-between gap-4'>
        <img src={assets.search} alt="" className='w-[30px] h-[30px]' />

        <div className="navbar-search-icon">
          <img src={assets.cart} alt="" className='w-[30px] h-[30px]'/>
          <div className="dot">

          </div>
        </div>
        <button > Sing in</button>

      </div>
      
    </div>
  )
}

export default Navbar
