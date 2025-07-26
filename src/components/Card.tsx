import { Tweet } from "react-tweet"
import { RiCloseCircleFill } from "react-icons/ri";
import axios from "axios";
import { BACKEND_URL } from "../config";


interface cardProps{
    type:"youtube"|"twitter",
    link:String,
    title:String,
    id:String,
    onDelete:()=>void
}

const Card = ({type,link,title,id,onDelete}:cardProps) => {
 
     let embededLink:any=[];
     let embedId:string="";
    if(type=="twitter"){
        embededLink=link.split("/");
         embedId= embededLink[embededLink.length-1]
    }
   
    const deleteContent = async ( )=>{
        
            await axios.delete(`${BACKEND_URL}/app/v1/content/${id}`)
        onDelete?.();
          
    }
   

  return (
    <div className={`w-72 rounded-md  border-2 border-slate-500 flex justify-center min-h-40 bg-slate-200 shadow-xl ${type=="youtube"? "": " "}`}>
     
      <div className="w-[90%]  h-[90%]  mb-4  "> 
        <div className=" flex items-center justify-end mb-2 mt-2">
         
         <RiCloseCircleFill  className="text-xl cursor-pointer" onClick={deleteContent} />
         
        </div>
        <div className="w-[100%]   overflow-hidden border rounded-md  ">
            {type=="youtube"&&<iframe className="w-[100%]  " src={link.replace("watch?v=", "embed/")
} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
       {type === "twitter" && (
  <div className="relative -mt-8 max-h-60 overflow-hidden rounded-md w-full">
    <Tweet id={embedId} />
  </div>
)}


        
       </div>
       <div className="w-[90%]">
       { title}
       </div>
       </div>
    </div>
  )
}

export default Card