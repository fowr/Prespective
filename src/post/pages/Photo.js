import React from 'react'
import {useParams} from 'react-router-dom'
import { FiDownload, FiEye,FiHeart , FiUserPlus} from 'react-icons/fi'

import PhotoDetail from '../components/PhotoDetail'
import Image from '../../shared/components/UIElements/Image'

export default function Photo() {
var img_list=[ { src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'}]

    const photoId=useParams().photoId
    const photoInfo={photoId:photoId,photographerName:"علی حکمت",photographerId:"57819347",photographerStatus:"آماده همکاری تمام وقت",views:123412, photographerImg:'https://i.ibb.co/nctLpWR/profile.jpg', photographerId:'57819347', photoUrl:'https://unsplash.it/650/450' ,photoAlt:'nature'}
    return (
            <React.Fragment>
            <PhotoDetail photoInfo={photoInfo}/>
                <hr />
                {/* <div className="view actionBtn">
                
            </div> */}
                <section className="trend__section">
                    <h3 className="trend__section-header">عکس های مرتبط</h3>
                    <ul className="grid">
                        {img_list.map(Element => <Image photoId={Element.photoId}src={Element.src} alt={Element.alt}/>)}
                    </ul>
                </section>
                </React.Fragment>
                
    )
}
