import React from 'react'
import {NavLink} from 'react-router-dom'
import "./NavLinks.scss"
import {FiUpload} from "react-icons/fi";

const loginBtn={
    borderRadius:'10px',
    backgroundColor:'#81B214',
    lineHeight: 0
}
const NavLinks=props => {
    var login_session = false;

    if (login_session == true )
    {
        return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>خانه</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" exact>داشبورد</NavLink>
        </li>
        <li>
            <NavLink to="/users">کاربران</NavLink>
        </li>
        <li>
            <NavLink to="/post/new"> گالری</NavLink>
        </li>
        <li style={{loginBtn}}>
            <NavLink to="/auth" >بارگذاری عکس <FiUpload/></NavLink>
        </li>


    </ul>
    }
    else{
        return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>خانه</NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" exact>داشبورد</NavLink>
        </li>
        <li>
            <NavLink to="/users">کاربران</NavLink>
        </li>
        {/* <li>
            <NavLink to="/places/new"> گالری</NavLink>
        </li> */}
        <li style={loginBtn}>
            <NavLink to="/auth">بارگذاری عکس <FiUpload/></NavLink>
        </li>


    </ul>
    }
   
}

export default NavLinks