import React from 'react'
import './UserProfile.scss'
import { FiUserPlus } from 'react-icons/fi'
function UserProfile(props) {
 
    return (
        <div className="user-profile">
            <div className="user-profile__image"> 
            <img src={props.item.image}  alt={props.item.name}/>

            </div>
            <div className="user-profile__detail">
            <h3>{props.item.name}</h3>
            <h6>{props.item.follower} دنبال کننده</h6>
            <h6>{props.item.following} دنبال شونده</h6>
            <button className="follow-btn">دنبال کردن <FiUserPlus/></button>
            
            
            </div>
        </div>
    )
}

export default UserProfile
