import React from "react";
import "./Login.css";

class Login extends React.Component{
    render(){
        return(
            <div className="main">
                <div className="login-container">
                    <div className="form">
                        <center id="login">Log &middot; In</center>
                        <form>
                            <label htmlFor="username-login">Username</label><br />
                            <input className="input" id="username-login" />
                            <br /><br /><br />
                            <label htmlFor="password-login">Password</label><br />
                            <input className="input" id="password-login" type="password" />
                            <br /><br />
                            <center>
                                <span className="login-bttn">Login</span>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;