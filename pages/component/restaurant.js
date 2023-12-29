import React, {useState} from 'react'
import Menu from './menuApi.js'
import MenuCard from './menuCard.js'

const Restaurant = () => {
  const[menuData, setMenuData] = useState(Menu);
  return (
    <>
    
    <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant
