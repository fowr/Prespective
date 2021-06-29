import React from 'react';
import {Link} from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card'
import Button from "../../shared/components/FormElement/Button"

import { FiUser ,FiImage} from "react-icons/fi";
import './UserItem.scss';
const UserItem=props => {
    return (
    <div className="user-item col-lg-4 col-md-6 col-sm-8 col-10">
    <Card className="user-item__content">
        <Link to={`/${props.id}/photos`}>
        <div className="user-item__image">
           <Avatar image={props.image} alt={props.name}/>
        </div>
        <div className="user-item__info">
            <h2><span><FiUser/></span>{props.name}</h2>
      
        <h3> <span><FiImage/></span>{props.placeCount } پست</h3>
        </div>
       
        </Link>
        <Button inverse>دنبال کردن</Button>
    </Card>
    </div>)
};

export default UserItem;