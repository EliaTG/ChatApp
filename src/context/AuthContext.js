import {createContext, useEffect, useState, useContext} from 'react';
import { 
    signOut ,
    GoogleAuthProvider,
    GithubAuthProvider, 
    FacebookAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    updateCurrentUser
} from "firebase/auth";
import {auth} from '../firebase';

const AuthContext = createContext();




export function UserAuthContextProvider ({children}){
    const [user, setUser] = useState('');
    useEffect(() =>{
      const unsubuscribe = onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);
        });
        return () => {
            unsubuscribe();
        }
    },[]);
    function LogOut (){
        return signOut(auth);
    }
    function signInWithGoogle () {
            const googleProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleProvider);
    };

    return <AuthContext.Provider value={{user,signInWithGoogle, LogOut}} >
        {children}
    </AuthContext.Provider>
}

export function useUserAuth(){
 return useContext(AuthContext);
}