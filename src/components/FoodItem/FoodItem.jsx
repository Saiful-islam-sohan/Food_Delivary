import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { storeContext } from '../../contwxt/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
  
// const [itemCount,setItemCount]= useState(0);

const {cartItems,addToCart, removeFromCart} = useContext(storeContext)
  
  return (
    <div className='food-item mt-[20px] w-[100%]'>
      <div className="relative food-item-image-container">
        <img src={image} alt="" className='h-[150px] w-[250px] border-r-[10px]' />
        {
          !cartItems[id] ? <img src={assets.plus} onClick={()=>addToCart(id)} className='w-[30px] h-[30px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full'/>: 
          <div className='absolute bottom-[15px] right-[15px] food-item-counter flex items-center gap-[7px] p-[6px] rounded-[50px] bg-white h-[30px] '>
             <img onClick={()=>addToCart(id)} src={assets.plusgreen} alt="" className='w-[20px] h-[20px]'/>
             <p>{cartItems[id]}</p>
            
             <img onClick={()=>removeFromCart(id)} src={assets.minus} alt="" className='w-[20px] h-[20px]'/>
          </div>
          
        }
      </div>
      <div className='food-item-info p-[20px]'>
        
        <div className="flex justify-between gap-3 food-item-name-rating">
            <p className='font-bold'>{name}</p>
            <img src={assets.ratting} alt=""  className='w-[50px]'/>
            
        </div>
        <p className="food-item-des">
            {description}
        </p>
        <p className="text-green-800">
            ${price}
        </p>
      </div>
    </div>
  )
}

export default FoodItem
