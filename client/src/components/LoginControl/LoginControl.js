import React from 'react';
import './LoginControl.css';
import { GoogleAPI, GoogleLogin, GoogleLogout } from "react-google-oauth";


// Login Control Component
const LoginControl = (props) => (
  
  <div className="sizeAuto">
    <GoogleAPI 
      clientId="470848001164-2l4g92q85okvv703tf7ptnllvtci31km.apps.googleusercontent.com"
      fetch_basic_profile="true" >
        { props.isLoggedIn ?
          <GoogleLogout 
            text="Logout"
            width="180px"
            onLogoutSuccess={props.handleLogoutClick} 
            />
          : 
          <GoogleLogin 
            text="Login"
            width="180px"
            onLoginSuccess={props.handleLoginClick} 
            /> 
        }
    </GoogleAPI>
  </div>
);
  
  
  export default LoginControl;


  // Daniels clientId: "470848001164-2l4g92q85okvv703tf7ptnllvtci31km.apps.googleusercontent.com"
  // Franks clientId: "338508164539-lg1qobf7ue0nco24i25ua331f7qrmg25.apps.googleusercontent.com"