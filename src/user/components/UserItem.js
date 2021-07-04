import React from 'react';
import {Link} from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar'
import Button from "../../shared/components/FormElement/Button"

import { FiUser ,FiImage} from "react-icons/fi";
import './UserItem.scss';
const UserItem=props => {
 return (  <div className=" col-lg-3 col-md-4 col-sm-10 ">
        <li className="user-item">
            <Link to={`/${props.id}/photos`}>
            <div className="user-item__image">
            <img src={props.image} alt={props.name}/>
            </div>
            <div className="user-item__info">
                <h2><span><FiUser/></span>{props.name}</h2>
                 <h2> <span><FiImage/></span>{props.placeCount } پست</h2>
            <button className='user-item__btn' >مشاهده پروفایل</button>
            </div>
            </Link>
        </li>
    </div>)
};

export default UserItem;
