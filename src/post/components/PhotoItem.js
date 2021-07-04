import React from 'react'
import './PhotoItem.scss'
import Card from "../../shared/components/UIElements/Card"
import Button from "../../shared/components/FormElement/Button"
import { Link } from 'react-router-dom'

const PhotoItem= props =>{
  
    
    return <li className="photo-item" >
                <div className="photo-item col-lg-3 col-md-4  col-sm-12">
                <Card className="photo-item__content">
                    <div className="photo-item__image">
                        <img src={props.image} alt={props.title}/>
                    </div>

                    <div className="photo-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                        <Link to={`/photos/${props.id}`}>مشاهده</Link>
                </Card>
            
                 </div>
        </li>
}

export default PhotoItem


