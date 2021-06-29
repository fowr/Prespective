import React from 'react'
import UserProfile from '../components/UserProfile'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import PhotoList from '../../post/components/PhotoList'

const isVeiwerTheUser= false
const UserInfo={id:'u2',name:'سهیل راهساز',places:3,follower:1,following:1,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'}
const UserPosts=[     {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const style={paddingTop:"6rem"}

function Dashboard() {
    return (
        <div className="container" style={style} >
            <UserProfile item={UserInfo} dashboard/>
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="جدیدترین ها">
                <PhotoList items={UserPosts} dashboard={isVeiwerTheUser}/>
            </Tab>
            <Tab eventKey="profile" title="ایجاد پست">
                <h1>salams</h1>
            </Tab>
            
            </Tabs>
       
        </div>
    )
}

export default Dashboard
