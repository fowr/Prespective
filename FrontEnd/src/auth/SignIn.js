import React from "react";
import {Link} from 'react-router-dom'


function SignIn () {
        return (
            <div className="auth-form__container">
            <form className="auth-form">
                <h3>ورود به پرسپکتیو</h3>
<br/>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="ایمیل" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="گذرواژه" />
                </div>

               

                <button type="submit" className="btn btn-primary btn-block">ورود</button>
                <p className="forget-password">
                     <Link to="/forget-pass">بازیابی رمز عبور</Link>
                </p>
            </form>
            </div>
        );
    }
export default SignIn;