import React from 'react';
import './Textbox.scss'
import {Link} from 'react-router-dom'
import SearchBar from '../../shared/components/FormElement/SearchBar';
import Tags from './Tags';
const TextBox = () => {
    return ( <div className="header__text-box">
      
    <h1 className="heading-primary">
      <span className="heading-primary__main">پرسپکتیو</span>
      <span className="heading-primary__sub">شبکه <span className='text-bold'>حرفه ای</span> اشتراک گذاری عکس </span>
    </h1>
    <SearchBar/>
    <Tags/>
  </div>
);
}
 
export default TextBox;
