import { useRef } from "react";
import Button from "../components/Button"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signin = () => {


  const userNameRef:any=useRef<HTMLInputElement>();//generics learn
   const passwordRef:any=useRef<HTMLInputElement>();
   const navigate=useNavigate();

   async function  signin(){
    const userName=userNameRef.current?.value;
    const password=passwordRef.current?.value;
     const response=await axios.post(BACKEND_URL+"/app/v1/signin",{
        userName,
        password
    })
   const jwt=response.data.token;
   localStorage.setItem("token",jwt);
   navigate("/dashboard")
   }

  return (
      <div className="bg-cream h-screen w-screen flex items-center justify-center">
        
         <div className="relative bg-blue-200 w-full max-w-md rounded-2xl shadow-2xl p-8 space-y-6">
              
        
                <h2 className="text-2xl font-bold text-gray-800 text-center">Sign in</h2>
        
                <div className="space-y-4">
                  <input
                  ref={userNameRef}
                    type="text"
                    placeholder="Username"
                    className="w-full  px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <input
                  ref={passwordRef}
                    type="text"
                    placeholder="Password"
                    className="w-full   px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
        
               
                <div className="flex justify-center pt-2">
                  <Button onClick={signin} text={"Sign in"} variant="primary"   />
                </div>
              </div>
         
    </div>
  )
}

export default Signin