import React from "react";
import { signOut,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")
    });
    
  }

  return (
    <div className="absolute px-14 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex p-4">
        <img className="w-12 h-12"
          alt="userIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
        <button onClick={handleSignOut} className="p-2 font-bold text-white">Sign Out</button>
      </div>
    </div>
  );  
};

export default Header;
