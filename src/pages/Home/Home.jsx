import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Header from '../../components/Header/Header'
import './Home.css'
import AppDewnload from '../../components/AppDownload/AppDewnload'

const Home = () => {
 let[category, setCategory]= useState('All')
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category = {category}></FoodDisplay>
      <AppDewnload/>
      
    </div>
  )
}

export default Home
