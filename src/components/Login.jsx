import React from 'react'
import Lottie from 'react-lottie';
import userProfile from '../Animation/userProfile.json';
import google  from '../images/google.png';
import facebook  from '../images/facebook.png'

const Login= () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        // animationData: Paperplane,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
    <div className="Login">
        <div className="box">
            <Lottie options={{animationData: userProfile, ...defaultOptions}}  height={230}  width={230}  />
            <h1 className="title">Sign in to Lux</h1>
            <form action="">
                   <div className="google-auth">
                        <img  src={google} alt="Google logo"  />
                   </div>
                   <div className="facebook-auth">
                        <img  src={facebook} alt="Facebook logo"  />
                   </div>
            </form>
        </div>
    </div>
    )
}


    // Loading animation


export default Login