import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDewnload = () => {
  return (
    <div  className='app-download' id='app-download'>
        <p>For Better Experience Download  <br />Tomato App</p>
        <div className='flex justify-center gap-5 app-download-platforms '>
          <img src={assets.playstore} alt="" className='h-[100px] w-[100px] cursor-pointer hover:scale-100 transition-transform duration-300' />
          <img src={assets.appStore} alt="" className='h-[30px] w-[100px] mt-[30px] cursor-pointer hover:scale-100 transition-transform duration-300' />
          
        </div>
    </div>
  )
}

export default AppDewnload

