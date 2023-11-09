import React from "react";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate("/error")
    });
    
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unscribe when component unmounts
    return ()=> unsubscribe();
  }, []);

  return (
    <div className="absolute px-14 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src={LOGO}
        alt="logo"
      />
      <div className="flex p-4">
        <img className="w-12 h-12"
          alt="userIcon"
          src={USER_AVATAR}
        />
        <button onClick={handleSignOut} className="p-2 font-bold text-white">Sign Out</button>
      </div>
    </div>
  );  
};

export default Header;
