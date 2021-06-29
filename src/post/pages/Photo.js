import React from 'react'
import {useParams} from 'react-router-dom'
import PhotoDetail from '../components/PhotoDetail'

export default function Photo() {
    const style={display:'grid', justifyContent:'center' , alignItems:'center' ,height:'100vh'}
    const photoId=useParams().photoId
    const photoInfo={photoId:photoId,photographerName:"علی حکمت",photographerStatus:"آماده همکاری تمام وقت",views:123412, photographerImg:'https://i.ibb.co/nctLpWR/profile.jpg', photographerId:'57819347', photoUrl:'https://unsplash.it/650/450' ,photoAlt:'nature'}
    return (
        
        <div style={style}>
            <PhotoDetail photoInfo={photoInfo}/>
            <img src={photoInfo.photoUrl} alt="" />
        </div>
    )
}
