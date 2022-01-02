import React from "react";
import GoogleLogin from "react-google-login";

const GoogleLoginButton = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }


    return (
        <GoogleLogin
            clientId="1044173717831-bt8a6ls8sauqcu9436pefe551peta201.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
} 

export default GoogleLoginButton;
