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
      
      const USER={id:'57819347',name:'علی حکمت',follower:10,following:77,places:2,image:'https://i.ibb.co/nctLpWR/profile.jpg'}
     
const style={paddingTop:"6rem"}

const UserPhotos=()=> {

    return <React.Fragment>
         <div className="container" style={style}>
          <UserProfile item={USER}/>
          <PhotoList items={DUMMY}/>
         </div>
     
    </React.Fragment>
}

export default UserPhotos
