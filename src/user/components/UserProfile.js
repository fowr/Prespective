import React from 'react'
import './UserProfile.scss'
function UserProfile(props) {
    if(props.dashboard)return(
        <div className="user-profile">
        <div className="user-profile__image"> 
        <img src={props.image}  alt={props.name}/>

        </div>
        <div className="user-profile__detail">
        <h3>{props.name}</h3>
        <h6>{props.follower} دنبال کننده</h6>
        <h6>{props.following} دنبال شونده</h6>
        <button className="edit-btn">تغییر مشخصات</button>
        </div>
    </div>)
    return (
        <div className="user-profile">
            <div className="user-profile__image"> 
            <img src={props.image}  alt={props.name}/>

            </div>
            <div className="user-profile__detail">
            <h3>{props.name}</h3>
            <h6>{props.follower} دنبال کننده</h6>
            <h6>{props.following} دنبال شونده</h6>
            <button className="flw-btn">دنبال کردن</button>
            </div>
        </div>
    )
}

export default UserProfile
