import './ExploreMenu.css'

 import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
console.log(category, setCategory)
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1 className='font-bold text-slate-700'>Explore Our menu</h1>
      <p className='max-w-[160%] text-sky-950'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione ut deserunt aliquid expedita laborum quisquam corrupti, porro reiciendis eligendi?</p>
      <div className="flex items-center justify-between explore-menu-list gap-[30px] overflow-x-auto">
        {
            menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-lite-item'>
                        {/* <img src={item.menu_Image} alt="" className='w-[70px] h-[70px] rounded-full cursor-pointer transition-opacity {category===item.manu_name?"ative"}' /> */}
                       
                       <img src={item.menu_Image} className={`w-[70px] h-[70px] rounded-full cursor-pointer transition-opacity ${category===item.menu_name?"active" :""}`} alt="" />
                       
                        <p className='text-center'>{item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
     
      <hr />
    </div>
  )
}

export default ExploreMenu
