import React from 'react'
import ReactDOM from 'react-dom'

import './Footer.scss'

function Footer() {
        const content=<footer className="footer">
            <div className="row ">
                <div className="col-md-6 footer-aboutus">
                    <h3 >
                        درباره ما
                    </h3>
                    <p>
                    پرسپکتیو به منظور ایجاد انگیزه برای هنرمندان این سرزمین به خصوص عکاسان به وجود آمده است. بدین ترتیب که کاربران پرسپکتیو با به اشتراک گذاری عکس هایشان شانس رقابت با دیگر عکاسان را خواهند داشت. و در صورت بالاتر بودن بازدید و لایک هایشان برنده مسابقه هفتگی خواهند شد.
                    </p>
                    </div>
         
                <div className="col-md-6 footer-contactus">
                    <h3>
                        راه های ارتباطی
                    </h3>
                    <p>
                   <h4>پست الکترونیک:  <span>info@prespective.ir</span></h4>
                   <h4>شماره تماس: <span>01342332447</span> </h4>
                    </p>
                    </div>
            </div>
        </footer>
     return ReactDOM.createPortal(content,document.getElementById('footer'))
}

export default Footer
