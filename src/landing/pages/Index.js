import React from 'react'
import MainHeader from '../components/MainHeader'
import Image from '../components/Image';
import './index.scss'

const Index= ()=>{
    var cardStyle={display:"grid",justifyContent:"center",height:"20rem",backgroundColor:"#8888882e",color:'#f8df00',paddingTop:"30px"}
    var img_list=[ { src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'}]
    // var img_list=[{ src:"https://unsplash.it/610/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/593/400" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/344/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/520/434" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/330/630" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/440" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/630/420" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/400/400" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/640/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/620/500" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/530/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/430/440" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/640/420" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/300/600" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/640/480" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/600/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/300/400" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/400/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/610/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/603/402" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/344/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/620/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/630/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/440" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/630/420" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/400/400" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/640/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/400/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/610/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/593/400" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/344/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/520/434" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/330/630" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/440" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/630/420" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/400/400" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/640/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/620/500" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/530/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/430/440" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/640/420" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/300/600" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/640/480" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/600/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/300/400" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/400/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/610/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/450" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/603/402" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/344/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/620/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/630/430" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/650/440" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/630/420" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/400/400" , alt:"" , photoId:'op2h4b'},{ src:"https://unsplash.it/640/450" , alt:"" , photoId:'op2h4b'}]
    return(<React.Fragment>
        <MainHeader/>
        
        <section className="trend__section">
<h1 className="trend__section-header" >جدیدترین آثار عکاسان پرسپکتیو</h1>
<ul className="grid">

{img_list.map(Element => <Image photoId={Element.photoId}src={Element.src} alt={Element.alt}/>)}

 
  
</ul>



        {/* <div className="container">
            <h2 className="about-section__heading">چرا پرسپکتیو</h2>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8  col-10 about-section__card">
                <Card style={cardStyle}>
                    <div className="about-section__icon">
                    <FiCheckCircle/>
                    </div>
                <h2>امکان اشتراک گذاری عکس ها</h2>
                </Card>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8  col-10 about-section__card">
                <Card style={cardStyle}>
                <div className="about-section__icon">
                <FiEye/>
                </div>
                <h2>کسب شهرت از طریق دیده شدن</h2>
                </Card>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8  col-10 about-section__card">
                <Card style={cardStyle}>
                <div className="about-section__icon">
                <FiDollarSign/>
                    </div>
                    <h2>کسب درآمد در صورت بازدید عکس ها</h2>
                
                </Card>
                
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 col-10  about-section__card">
                <Card style={cardStyle}>
                <div className="about-section__icon">
                <FiHeart/>
                    </div>
                    <h2>امکان آشنایی با دیگر کاربران سایت</h2>
              
                </Card>
                
            </div>
        </div>
        </div> */}
       
        </section>
    </React.Fragment>

      
    )
}

export default Index
