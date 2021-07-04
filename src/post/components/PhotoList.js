import React from 'react'

import Card from "../../shared/components/UIElements/Card"
import PhotoItem from "./PhotoItem"
import './PhotoList.scss'


const PhotoList= props =>{
if(props.items.length===0){
    return <div className="photo-list center">
       
        <Card>
            <h2>تاکنون عکسی منتشر نکرده</h2>
        </Card>
    </div>
}
return <React.Fragment>
 <h2> پست ها</h2>
 <div className="row photo-list">
    <ul>
        {props.items.map(photo => <PhotoItem key={photo.id} id={photo.id} image={photo.imageUrl} title={photo.title} description={photo.description} address={photo.address} creator={photo.creator} coordinates={photo.location} dashboard={props.dashboard}/>)}
    </ul>
</div>

</React.Fragment>

}

export default PhotoList
