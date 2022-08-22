import React from 'react';
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
    

  return (
    <div className="Auth">
    <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
            <h1>Allurine ChatApp </h1>
            <h6>Explore The Ideas througthout The World.</h6>
        </div>
    </div>
    <Login/>
    </div>
  )
  
}
function SignUp(){
    return (
        <div className="a-right">
            <form className="infoForm authForm">
              <h3>Sign Up</h3>
              <div>
                <input type="text" placeholder="First Name" className="infoInput" name="firstname"/>
                <input type="text" placeholder="Last Name" className="infoInput" name="lasgtname"/>
              </div>
              <div>
                <input type="text" placeholder="User Name" className="infoInput" name="username"/>
                </div>
                <div>
                <input type="email" placeholder="Email" className="infoInput" name="email"/>
                </div>
                <div>
                <input type="password" placeholder="Password" className="infoInput" name="password"/>
                <input type="password" placeholder="Confirm Password" className="infoInput" name="confirm_password"/>
              </div>
              <div>
                <span style={{fontSize: "12px", fontWeight: "bold"}}>Already Have An Account. Login</span>
              </div>
              <button className="btn infoBtn">Sign Up</button>
            </form>
        </div>
    )
}
function Login(){
    return (
        <div className="a-right">
            <form className="infoForm authForm">
              <h3>Sign In</h3>
             
                <div>
                <input type="text" placeholder="User Name" className="infoInput" name="username"/>
                </div>
                
                
                <div>
                <input type="password" placeholder="Password" className="infoInput" name="password"/>
                
              </div>
              <div>
               
                
                <span style={{fontSize: "12px", fontWeight: "bold"}}>Dont Have An Account . Sign Up</span>
               
              <button className="btn infoBtn">Login </button>
              </div>
            </form>
        </div>
    );
}
export default Auth