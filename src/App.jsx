import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import LoginPopUp from "./components/LoginPopUp/LoginPopUp"


const App = () => {

  const[showLogin, setShowLogin] = useState(false)


  return (
    <>
    {
      showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>
    }
      <div className="app w-[80%] m-auto">
        <Navbar  setShowLogin={setShowLogin} ></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/order" element={<PlaceOrder></PlaceOrder>}></Route>
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App


