import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios';
import { ChatEngine } from 'react-chat-engine';
import {LogoutOutlined, UserOutlined } from '@ant-design/icons';
import {useUserAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom';

const Chats = () => {
    // const didMountRef = useRef(false)
    // const { logout, user } = useAuth();
    const didMountRef = useRef(false)
    const navigate = useNavigate();
    const {user, LogOut} = useUserAuth();
    const [loading, setLoading] = useState(true);
  
// Ejemplo

// Ejemplo


    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();
        return new File([data], "test.jpg", { type: 'image/jpeg' });
    }
    useEffect(() => {
        if (!didMountRef.current) {
          didMountRef.current = true
    
          if (!user || user === null) {
            navigate("/")
            return
          }
          
          // Get-or-Create 
          axios.get(
            'https://api.chatengine.io/users/me/',
            { headers: { 
              "project-id":  '05f16ac0-a17f-4980-b9f8-53835d8f1a73',
              "user-name": user.email,
              "user-secret": user.uid,
            }}
          )
    
          .then(() => setLoading(false))
    
          .catch(e => {
            let formdata = new FormData()
            formdata.append('email', user.email)
            formdata.append('username', user.email)
            formdata.append('secret', user.uid)
    
            getFile(user.photoURL)
            .then(avatar => {
              formdata.append('avatar', avatar, avatar.name)
    
              axios.post(
                'https://api.chatengine.io/users/',
                formdata,
                { headers: { "private-key": "de09f395-0598-45ad-852a-5946af4c8307" }}
              )
              .then(() => setLoading(false))
              .catch(e => console.log('e', e.response))
            })
          })
          // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
        }
      }, [user, navigate])
    // const getFile = async (url) =>{
    //     const response = await fetch(url);
    //     const data = await response.blob();

    //     return new File([data], "userPhoto,jpg", {type: 'image/jpeg'})

    // };
    // useEffect(() => {
    //     if(!user){
    //         navigate('/')
    //         return;
    //     }
    //     axios.get('https://api.chatengine.io/users/me', {
    //         headers:{
    //             "project-id": "05f16ac0-a17f-4980-b9f8-53835d8f1a73",
    //             "user-name": user.email,
    //             "user-secret": user.uid,
    //         }}
    //     )
    //     .then(() =>{
    //             setLoading(false);
    //     })
    //     .catch((err)=>{
    //             let formdata = new FormData();
    //             formdata.append('email', user.email);
    //             formdata.append('username', user.displayName);
    //             formdata.append('secret', user.uid);
                  
    //             getFile(user.photoURL)
    //                 .then((avatar) =>{
    //                     formdata.append('avatar', avatar, avatar.name);

    //                     axios.post('https://api.chatengine.io/users/',
    //                         formdata, 
    //                         {headers: {"private-key": "de09f395-0598-45ad-852a-5946af4c8307"}}
                        
    //                     )
    //                     .then(() => setLoading(false))
    //                     .catch((err) => console.log(err));
    //                 })
               
    //         })
        

    // }, [user, navigate])


    if(!user || loading) return 'Loading...'
         
    console.log(user);
    const handleLogOut =  async () => {
        try {
          await LogOut();
        } catch (error) {
          console.error(error.message);
        }
      };
    return(
        <div className="chats">
                <div className="navbar">
                            <div className="logo">
                                Lux
                            </div>
                            <div className="info">
                                <div className="profile-pic">
                                    {/* {user && user.photoURL} */}
                                    <UserOutlined />
                                </div>
                                <div className="name">
                                    {user && user.displayName}
                                </div>
                                {/* <span>{user.displayName}</span> */}
                                <div className="logout-tab"
                                    onClick={handleLogOut}
                                >
                                <LogoutOutlined /> 
                                </div>
                            </div>
                </div>
               <ChatEngine
                    height="calc(100vh - 10vh)"
                    projectID="05f16ac0-a17f-4980-b9f8-53835d8f1a73"
                    userName={user.email}
                    userSecret={user.uid}
                    />
 </div>
 )
 }
export default Chats;
