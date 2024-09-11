import { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopUp = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Sing Up")

    return (
        <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
            {/* Login Form Container */}
            <form className='relative bg-white w-full max-w-[400px] p-6 rounded-lg shadow-lg text-gray-700'>
                  {/* this is header */}
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='text-2xl font-semibold'>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross} alt="Close" className='w-[30px] h-[30px] cursor-pointer' />
                </div>

                {/* Input Fields */}
                <div className='flex flex-col gap-4'>
                    {currState === "Sign Up" && (
                        <input 
                            type="text" 
                            placeholder='Your name' 
                            required 
                            className='p-2 border rounded-md focus:outline-none focus:border-blue-500'
                        />
                    )}
                    <input 
                        type="email" 
                        placeholder='Your email' 
                        required 
                        className='p-2 border rounded-md focus:outline-none focus:border-blue-500'
                    />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        required 
                        className='p-2 border rounded-md focus:outline-none focus:border-blue-500'
                    />
                </div>

                {/* Submit Button */}
                <button className='w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>

                {/* Terms and Conditions */}
                <div className='flex items-center mt-4'>
                    <input type="checkbox" required className='mr-2' />
                    <p className='text-sm'>I agree to the <span className='text-blue-500'>terms of use & condition</span></p>
                </div>

                {/* Toggle between Login and Sign Up */}
                {currState === "Login" ? (
                    <p className='mt-4 text-sm'>
                        Create a new account? <span onClick={() => setCurrState("Sign Up")} className='text-blue-500 cursor-pointer'>Click Here</span>
                    </p>
                ) : (
                    <p className='mt-4 text-sm'>
                        Already have an account? <span onClick={() => setCurrState("Login")} className='text-blue-500 cursor-pointer'>Login Here</span>
                    </p>
                )}
            </form>
        </div>
    )
}

export default LoginPopUp
