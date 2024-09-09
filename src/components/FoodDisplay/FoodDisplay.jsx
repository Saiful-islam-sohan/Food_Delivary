

import { useContext } from 'react'
import './foodDisplay.css'
import { storeContext } from '../../contwxt/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {


    const { food_list } = useContext(storeContext)
    console.log(food_list);

    return (
        <div className='food-display  mt-[10px]' id='food-display'>
            <h2 className='text-xl font-bold'>Top dishes near you </h2>
            <div className="food-display-list">
                {

                    food_list.map((item, index) => {
                        if (category==='All' || category===item.category)
                        {
                            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} ></FoodItem>
                        }

                           
                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay
