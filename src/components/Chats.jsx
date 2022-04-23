import React from 'react';
import { ChatEngine } from 'react-chat-engine';
// import { useAuth } from "../contexts/AuthContext";
import {useUserAuth} from '../context/AuthContext'

const Chats = () => {
    // const { logout, user } = useAuth();
    const {user, LogOut} = useUserAuth();
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
                        <div className="">
                            <div className="profile-pic"></div>
                            <div className="name">
                                {user && user.displayName}
                            </div>
                              {/* <span>{user.displayName}</span> */}
                            <div className="logout-tab"
                                onClick={handleLogOut}
                            >
                                <p>Logout</p>
                             </div>
                        </div>
               </div>
               <ChatEngine
                    height="calc(100vh - 10vh)"
                    projectId="05f16ac0-a17f-4980-b9f8-53835d8f1a73"
                    userName="."
                    userSecret="."
               />
        </div>
    )
}

export default Chats;