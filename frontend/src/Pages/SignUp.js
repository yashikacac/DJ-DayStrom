import React from "react";
import "./SignUp.css";

class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.registerUserApi = this.registerUserApi.bind(this);
        this.updateStateWithValueForEachInputField = this.updateStateWithValueForEachInputField.bind(this);
        this.state = {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: ''
        };
    }

    updateStateWithValueForEachInputField(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    registerUserApi(){
        var url = "http://localhost:8000/register/";
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password
            })
        }).then((res) => res.json()).then((data) => {
            console.log(data);
        });
    }

    render(){
        return (
            <div className="main">
                <div className="register-container">
                    <div className="form">
                        <center id="signup">Sign &middot; Up</center>
                        <form>
                            <label htmlFor="firstname-field">First Name</label><br />
                            <input name="first_name" className="input" type="text" id="firstname-field" onChange={this.updateStateWithValueForEachInputField} />
                            <br /><br />
                            <label htmlFor="lastname-field">Last Name</label><br />
                            <input name="last_name" className="input" type="text" id="lastname-field" onChange={this.updateStateWithValueForEachInputField} />
                            <br /><br />
                            <label htmlFor="email-field">Email</label><br />
                            <input name="email" className="input" type="email" id="email-field" onChange={this.updateStateWithValueForEachInputField} />
                            <br /><br />
                            <label htmlFor="username-field">Username</label><br />
                            <input name="username" className="input" type="text" id="username-field" onChange={this.updateStateWithValueForEachInputField} />
                            <br /><br />
                            <label htmlFor="password-field">Password</label><br />
                            <input name="password" className="input" type="password" id="password-field" onChange={this.updateStateWithValueForEachInputField} />
                            <br /><br /><br />
                            <center>
                                <span onClick={this.registerUserApi} className="register-bttn">Register</span>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;