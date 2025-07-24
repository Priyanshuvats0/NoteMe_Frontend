import { RxCross2 } from "react-icons/rx";
import Button from "./Button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface contentProps{
    show:Boolean,
    close:()=>void
}

const OverlayForm = ({show ,close}:contentProps) => {
  const titleRef=useRef<HTMLInputElement>();
  const linkRef=useRef<HTMLInputElement>();
  const typeRef=useRef<HTMLInputElement>();
  const addContent=async ()=>{
        const title=titleRef.current.value;
        const link=linkRef.current.value;
        const type=typeRef.current.value;
       await axios.post(BACKEND_URL+"/app/v1/content",{
            title,type,link
       },{
        headers:{
          "token":localStorage.getItem("token")
        }
       })
       close();
  }

  return (
    <div>
    {show&&<div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 space-y-6">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition" aria-label="Close" onClick={close}>
          <RxCross2 size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Content</h2>

        <div className="space-y-4">
          <input
             ref={titleRef}
            type="text"
            placeholder="Title"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
             ref={linkRef}
            type="text"
            placeholder="Link"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <select  ref={typeRef} name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="youtube">youtube</option>
    <option value="twitter">twitter</option>
   
  </select>
        </div>

       
        <div className="flex justify-center pt-2">
          <Button onClick={addContent} text={"Submit"} variant="primary"   />
        </div>
      </div>
    </div>}
    </div>
  );
};

export default OverlayForm;
