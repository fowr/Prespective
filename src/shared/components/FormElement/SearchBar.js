import React from 'react'
import './Searchbar.scss'
import { Link } from 'react-router-dom';
import {FiSearch} from "react-icons/fi";

export default function SearchBar() {
    return (
        <div className="searchbar">
          
            <Link href="/auth" className="searchbar__btn">  
                <FiSearch />
            </Link>
            <input type="text" className='searchbar__text-area' placeholder="جستجو در بیش از 50000 عکس"/>
        </div>
    )
}
