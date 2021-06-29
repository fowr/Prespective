import React from 'react'
import './PhotoItem.scss'
import Card from "../../shared/components/UIElements/Card"
import Button from "../../shared/components/FormElement/Button"
import { Link } from 'react-router-dom'

const PhotoItem= props =>{
    if(props.dashboard){
        return <div className="photo-item col-lg-6 col-sm-12">
        <Card className="photo-item__content">
        <div className="photo-item__image">
            <img src={props.image} alt={props.title}/>
        </div>

        <div className="photo-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="photo-item__actions">
            <Link to={`/post/${props.id}`}>مشاهده</Link>
            <Button danger>لایک</Button>
        </div>
        </Card>
       
    </div>
    }
    return <div className="photo-item col-lg-6 col-sm-12">
        <Card className="photo-item__content">
        <div className="photo-item__image">
            <img src={props.image} alt={props.title}/>
        </div>

        <div className="photo-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className="photo-item__actions">
        <Link to={`/photos/${props.id}`}>مشاهده</Link>
            <Button to={`/post/${props.id}`}>ویرایش</Button>
            <Button danger>حذف</Button>
        </div>
        </Card>
       
    </div>
}

export default PhotoItem
