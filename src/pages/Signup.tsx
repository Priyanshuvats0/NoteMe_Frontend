import { useRef } from "react"
import Button from "../components/Button"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


const Signup = () => {
 
   const userNameRef:any=useRef<HTMLInputElement>();//generics learn
   const passwordRef:any=useRef<HTMLInputElement>();
   const navigate=useNavigate();

   async function  signup(){
    const userName=userNameRef.current?.value;
    const password=passwordRef.current?.value;
     await axios.post(BACKEND_URL+"/app/v1/signup",{
        userName,
        password
    })
    alert("user is signed up");
    navigate("/signin")

   }

  return (
    <div className="bg-cream h-screen w-screen flex items-center justify-center">
        
         <div className="relative bg-blue-200 w-full max-w-md rounded-2xl shadow-2xl p-8 space-y-6">
              
        
                <h2 className="text-2xl font-bold text-gray-800 text-center">Sign up</h2>
        
                <div className="space-y-4">
                  <input ref={userNameRef}
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
                  <Button onClick={signup} text={"Sign up"} variant="primary"/>
                </div>
              </div>
         
    </div>
  )
}

export default Signup