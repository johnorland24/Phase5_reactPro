import React, { useState } from 'react'; 
import './LoginSignUp.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

export const LoginSignUp = () => {
  const [action, setAction] = useState("Sign In");

  return (
    <div className='container'>
      <div className="header">const [action, setAction] = useState("Sign In");

        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Sign In" ? <div></div>:<div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name' />
        </div>}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="Email" placeholder='Email' />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="Password" placeholder='Password' />
        </div>
      </div>
      { action==="Sign Up" ?<div></div>:<div className="forgot-password">Lost Password <span>Click here</span> </div>}
      
      <div className="submit-container">
        <div className={action==="Sign In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign In")}}>Sign In</div>
      </div>
    </div>
  );
};

export default LoginSignUp;
