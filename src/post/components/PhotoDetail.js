import React from 'react'
import './PhotoDetail.scss'

export default function PhotoDetail(props) {
    return (
        <div className='photodetail'>
            <div className="photodetail__photographer">
                <img className="photodetail__photographer-img" src={props.photoInfo.photographerImg} alt={props.photographerName}/>
                <h4 className="photodetail__photographer-name">{props.photoInfo.photographerName}</h4>
                <h5 className="photodetail__photographer-status">{props.photoInfo.photographerStatus}</h5>
            </div>
        </div>
    )
}
