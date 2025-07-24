import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <div className="w-[20%] border-r-2 border-gray-900">
      <div className="  h-screen ml-4 mt-4">
           <div className="font-bold text-2xl tracking-tighter">
            NOTE_ME
           </div>
           <div className=" mt-8 font-semibold text-xl">
                 <div className=" h-8 mb-2 w-[90%] border-slate-600  shadow-md  flex bg-slate-200 items-center gap-2 hover:bg-blue-200 p-2 cursor-pointer rounded-md">
                   <FaYoutube /> Youtube
                 </div>
                 <div className=" h-8  w-[90%] shadow-md border-slate-600   bg-slate-200 flex items-center gap-2  hover:bg-blue-200 p-2 cursor-pointer rounded-md">
                  <FaXTwitter /> Twitter
                 </div>
           </div>
      </div>
    </div>
  )
}

export default Sidebar