import React from 'react'
import PhotoList from '../components/PhotoList'
import UserProfile from '../../user/components/UserProfile'
import {useParams} from 'react-router-dom'


const DUMMY=[
        {
          id: 'p1',
          title: 'Empire State Building',
          description: 'One of the most famous sky scrapers in the world!',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
          creatorName:'علی حکمت',
          creator: 'u1'
        },
        {
          id: 'p1',
          title: 'Empire State Building',
          description: 'One of the most famous sky scrapers in the world!',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
          creatorName:'علی حکمت',
          creator: 'u1'
        },
        {
          id: 'p2',
          title: 'Emp. State Building',
          description: 'One of the most famous sky scrapers in the world!',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
          creatorName:'سهیل راهساز',
          creator: 'u2'
        }
      ];
      
      const USERS=[{id:'u1',name:'علی حکمت',follower:10,following:77,places:2,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'},
      {id:'u2',name:'سهیل راهساز',places:1,follower:1,following:1,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'}
      ,{id:'u3',name:'سهیل راهساز',places:0,follower:1432,following:2,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'}
      ,{id:'u4',name:'علی حکمت',places:0,follower:33,following:53,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'}]
const style={paddingTop:"6rem"}

const UserPhotos=()=> {
    const userId=useParams().userId
    const loadedPlaces= DUMMY.filter(photo=>photo.creator===userId)
    const userInfo= USERS.filter(user=>user.id===userId)
    console.log(userInfo)
    return <React.Fragment>
         <div className="container" style={style}>
          <UserProfile item={userInfo}/>
          <PhotoList items={loadedPlaces}/>
         </div>
     
    </React.Fragment>
}

export default UserPhotos
