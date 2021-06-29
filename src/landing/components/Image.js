import React from 'react'
import './image.scss'
import {FiHeart,FiDownload} from "react-icons/fi";
import { Link } from 'react-router-dom';
export default function Image(props) {

const list_style=["grid__item grid__item--wide","grid__item","grid__item grid__item--tall","grid__item grid__item--big"]
            return( <li className={list_style[Math.floor(Math.random() * list_style.length)]}>
                        <img className="grid__image" src={props.src} alt={props.alt}/>
                        <div className='hover__container'>
                            <Link to= {"photos/" + props.photoId}><b>مشاهده</b></Link>
                            <div className="hover__container-btns">
                                <FiHeart/>
                                <FiDownload/>
                            </div>
                            <div className="hover__container-photographer">
                                <img src="https://i.ibb.co/nctLpWR/profile.jpg" alt="" />
                                <h5>علی حکمت</h5>
                            </div>
                        </div>
                    </li>)
           
        }
        
    
