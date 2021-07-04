import React from 'react'
import './PhotoDetail.scss'
import { FiDownload, FiEye,FiHeart , FiUserPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom'
export default function PhotoDetail(props) {
    return (
        <React.Fragment>
        <div className='photodetail'>
            <div className="photodetail__photographer">
                <Link to ={"/" + props.photoInfo.photographerId + "/photos"}>  
                <img className="photodetail__photographer-img" src={props.photoInfo.photographerImg} alt={props.photographerName}/>
                <h4 className="photodetail__photographer-name">{props.photoInfo.photographerName}
                     <b className="photodetail__photographer-status">({props.photoInfo.photographerStatus})</b>
                 </h4>
                </Link>
                {/* <button className="photodetail__photographer-contact"><FiMail/>راه ارتباطی</button> */}
                <button className="photodetail__photographer-follow">دنبال کردن <FiUserPlus/></button>
            </div>
        </div>
            <div style={{display:'grid',  justifyContent:'center',alignItems:'center',  marginTop: '180px'}}>
                <img className='photo--img' src={props.photoInfo.photoUrl} alt="" />
                <p className="view">
                    <FiEye/> 1278 
                    <button className="actionBtn__like"> پسندیدن <i><FiHeart/> </i></button>
                    <button className="actionBtn__download"> دانلود <i><FiDownload/> </i></button>
                </p>
            </div>
    )
        </React.Fragment>)
        
}
