import React, {useState} from 'react'
import Lottie from 'react-lottie';
import userProfile from '../Animation/userProfile.json';

import google  from '../images/google.png';
import facebook  from '../images/facebook.png'
import github  from '../images/github.png'

import {useUserAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom';

const Login= () => {
    const [error, setError] = useState("");
    const { signInWithGoogle } = useUserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await signInWithGoogle();
            navigate('/chats');
        } catch (error) {
            setError(error.message)
        }
    }
// Animation Login with Lottie 
    const defaultOptions = {
        loop: true,
        autoplay: true,
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
                   <div className="google-auth"
                      onClick={handleGoogleSignIn}
                   >
                        <img  src={google} alt="Google logo"  />
                   </div>
                   <div className="facebook-auth">
                        <img  src={facebook} alt="Facebook logo"  />
                   </div>
                   <div className="github-auth"
                    // onClick={signInWithGithub}
                   >
                        <img  src={github} alt="Github logo"  />
                   </div>
            </form>
        </div>
    </div>
    )
}


    // Loading animation


export default Login