import React from 'react'
import PhotoList from '../../post/components/PhotoList'
import UserProfile from '../components/UserProfile'
import {useParams} from 'react-router-dom'


const DUMMY=[
        {
          id: 'p1',
          description: 'One of the most famous sky scrapers in the world!',
          imageUrl:
            'https://unsplash.it/650/450',
          creatorName:'علی حکمت',
          creatorID: '57819347',
          like:'1',
          view:'6'
        },
        {
          id: 'p1',
          description: 'One of the most famous sky scrapers in the world!',
          imageUrl:
            'https://unsplash.it/650/450',
          creatorName:'علی حکمت',
          creatorID: '57819347',
          like:'1',
          view:'6'
        },
        {
          id: 'p1',
          description: 'One of the most famous sky scrapers in the world!',
          imageUrl:
            'https://unsplash.it/650/450',
          creatorName:'علی حکمت',
          creatorID: '57819347',
          like:'1',
          view:'6'
        },
        {
          id: 'p1',
          description: 'One of the most famous sky scrapers in the world!',
          imageUrl:
            'https://unsplash.it/650/450',
          creatorName:'علی حکمت',
          creatorID: '57819347',
          like:'1',
          view:'6'
        }
      ];
      
      const USERS=[{id:'57819347',name:'علی حکمت',follower:10,following:77,places:2,image:'https://i.ibb.co/nctLpWR/profile.jpg'},
      {id:'u2',name:'سهیل راهساز',places:1,follower:1,following:1,image:'https://i.ibb.co/nctLpWR/profile.jpg'}
      ,{id:'u3',name:'سهیل راهساز',places:0,follower:1432,following:2,image:'https://i.ibb.co/nctLpWR/profile.jpg'}
      ,{id:'u4',name:'علی حکمت',places:0,follower:33,following:53,image:'https://i.ibb.co/nctLpWR/profile.jpg'}]
const style={paddingTop:"6rem"}

const UserPhotos=()=> {
    const userId=useParams().userId
    console.log(userId)
    const loadedPlaces= DUMMY.filter(photo=>photo.creatorID===userId)
    const userInfo= USERS.filter(user=>user.id===userId)
    console.log(userInfo)
    return <React.Fragment>
         <div className="container" style={style}>
          <UserProfile item={userInfo[0]}/>
          <PhotoList items={loadedPlaces}/>
         </div>
     
    </React.Fragment>
}

export default UserPhotos
