import React from "react";
import "./Login.css";

class Login extends React.Component{

    constructor(props){
        super(props);
        this.loginUserApi = this.loginUserApi.bind(this);
        this.updateStateWithValueForEachInputField = this.updateStateWithValueForEachInputField.bind(this);
        this.state = {
            username: '',
            password: '',
        };
    }

    updateStateWithValueForEachInputField(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    loginUserApi(){
        var url = "http://localhost:8000/login/";
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then((res) => res.json()).then((data) => {
            if(data["message"] === "true"){
                this.props.statusListener({
                    "status": true,
                    "username": this.state.username
                });
            }
            else{
                this.props.statusListener({
                    "status": false
                });
            }
        });
    }

    render(){
        return(
            <div className="main">
                <div className="signUp">
                    <a href="/signup">Register here</a>
                </div>
                <div className="login-container">
                    <div className="form">
                        <center id="login">Log &middot; In</center>
                        <form>
                            <label htmlFor="username-login">Username</label><br />
                            <input className="input" name="username" onChange={this.updateStateWithValueForEachInputField} id="username-login" />
                            <br /><br /><br />
                            <label htmlFor="password-login">Password</label><br />
                            <input className="input" name="password" onChange={this.updateStateWithValueForEachInputField} id="password-login" type="password" />
                            <br /><br />
                            <center>
                                <span onClick={this.loginUserApi} className="login-bttn">Login</span>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;