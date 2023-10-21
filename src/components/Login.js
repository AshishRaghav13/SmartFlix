import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setisSignInForm] = useState(true);
  const toggleSignInForm = ()=>{
     setisSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="">
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
        <form className="bg-black absolute p-12 w-3/12 my-44 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
          {
            !isSignInForm &&  <input
            type="text"
            required
            placeholder="Enter Your Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
          }
          <input
            type="email"
            required
            placeholder="Email or phone number"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full bg-gray-700"
          />
          <button className="p-2 my-6 rounded-sm bg-red-600 w-full font-bold">
          {isSignInForm?"Sign In":"Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
