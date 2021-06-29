import React from 'react';
import UserList from '../components/UserList'

const style={height:"5rem"}
const Users=()=>{
    const USERS=[{id:'u1',name:'علی حکمت',follower:10,following:77,places:2,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'},
    {id:'u2',name:'سهیل راهساز',places:1,follower:1,following:1,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'}
    ,{id:'u3',name:'سهیل راهساز',places:0,follower:1432,following:2,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'}
    ,{id:'u4',name:'علی حکمت',places:0,follower:33,following:53,image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'}]
    return <React.Fragment>
        <div style={style}></div>
        <UserList items={USERS}/>;
      
        </React.Fragment>
}

export default Users;