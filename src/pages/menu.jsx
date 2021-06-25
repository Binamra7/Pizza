import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/menuItem'
import '../styles/menu.css'

function menu() {



    return (
        <div className="menu">
            <h1 className="menuTitle">Our menu</h1>
            <div className="menuList">
                {MenuList.map((menuItem, key) => {
                    return <MenuItem key={key} image={menuItem.image} name={ menuItem.name} price={menuItem.price}/>
                })}
            </div>           
        </div>
    )
}

export default menu
