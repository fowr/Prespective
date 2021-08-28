import React from 'react'
import './MainHeader.scss'
import {Link} from 'react-router-dom'
import SearchBar from '../../shared/components/FormElement/SearchBar';
import Tags from './Tags';
import TextBox from './TextBox';

const MainHeader= ()=>{
    return(
        <header className="landing-header">
            <div className="header__text-box">
      
                <TextBox/>
                <SearchBar/>
                <Tags/>
            </div>
        </header>
    )
}

export default MainHeader
