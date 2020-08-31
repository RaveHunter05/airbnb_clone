import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            {/* <h1>Hello, Let's build AIRBNB clone <span>🚀</span></h1> */}
            <img 
                className='header__icon'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png" 
                alt="airbnb logo"
            />
            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>
        </div>
    )
}

export default Header
