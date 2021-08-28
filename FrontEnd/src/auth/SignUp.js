import React from "react";
import { Link} from "react-router-dom";

function SignUp() {
        return (

            <div className="auth-form__container">
                 <form className="auth-form">
                <h3>عضویت در پرسپکتیو</h3>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="نام" />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="نام خانوادگی" />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="ایمیل" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="گذرواژه" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">عضویت</button>
                <p className="redirect-login">
                    قبلا عضو پرسپکتیو شدید؟<Link to="/login">ورود</Link>
                </p>
            </form>
            </div>
           
        );
    }


export default SignUp