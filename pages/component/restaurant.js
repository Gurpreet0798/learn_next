import React, {useState} from 'react'
import Menu from './menuApi.js'
import MenuCard from './menuCard.js'
import NavBar from './NavBar.js';

const uniqueList = [...new Set
  (Menu.map((curElem) => {
  return curElem.category;
})
),
  "ALL",
];

console.log(uniqueList);

const Restaurant = () => {
  const[menuData, setMenuData] = useState(Menu);
  const[menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    if(category === "ALL"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    })
    setMenuData(updatedList)
  }
  return (
    <>
    <NavBar filterItem= {filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant
