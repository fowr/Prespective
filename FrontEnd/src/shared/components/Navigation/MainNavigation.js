import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'
import './MainNavigation.scss'


const MainNavigation = props =>{
    const [drawerIsOpen, setDrawerIsOpen]=useState(false)

    const openDrawer =()=>{setDrawerIsOpen(true)}
    const closeDrawer =()=>{setDrawerIsOpen(false)}
    return(
        <React.Fragment>
        {drawerIsOpen? <Backdrop onClick={closeDrawer}/> :null}

        
            <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
            <nav className="main-navigation__drawer-nav">
            <NavLinks/>
            </nav>
            </SideDrawer> 
        
        <MainHeader>
       <React.Fragment>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span/>
                <span/>
                <span/>
            </button>

            <h1 className='main-navigation__title'>
                <Link to= "/">پرسپکتیو</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks/>
            </nav>
       </React.Fragment>
           
        </MainHeader>
        </React.Fragment>
        
    )
}
export default MainNavigation