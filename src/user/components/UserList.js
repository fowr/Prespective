import React from 'react';
import UserItem from './UserItem'
import Card from '../../shared/components/UIElements/Card'
import './UserList.scss';

const UserList=props => {
    if(props.items.length===0){
        return  <div className="center">
            <Card>
            <h2>کاربری یافت نشد</h2>


            </Card>
        </div>
    }
return(
   <div className="row users-list container">
       {props.items.map(user=>(
       <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places}/>))}

   </div> 
    
)
};

export default UserList;