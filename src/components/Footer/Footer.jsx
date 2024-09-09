import { assets } from "../../assets/assets"
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-[100px]">
            <div className="footer-content w-[100%]">
                <div className="flex flex-col items-start gap-[20px] footer-content-left">
                    <img src={assets.logo} alt="" className="h-[50px] w-[50px] rounded-full" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis culpa laudantium iusto pariatur beatae minus?</p>
                    <div className="flex gap-4 ">
                        <img src={assets.linkedin} alt="" className="h-[50px] w-[50px] rounded-full" />
                        <img src={assets.facebook} alt="" className="h-[50px] w-[50px] rounded-full" />
                        <img src={assets.twitter} alt="" className="h-[50px] w-[50px] rounded-full" />
                    </div>
                </div>
                <div className="footer-content-center mb-[10px]">
                    <h2 className="">COMPANY</h2>
                    <ul className="">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About us</li>
                        <li className="cursor-pointer">Delivery</li>
                        <li className="cursor-pointer">privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li className="cursor-pointer">+1-224-535-3646</li>
                        <li className="cursor-pointer">Tomato@gmail.com</li>
                    </ul>
                </div>

            </div>
            <hr className="w-[100%] h-[2px] m-[20px] bg-gray-600" />

        </div>
    )
}

export default Footer
