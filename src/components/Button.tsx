import type { ReactElement } from "react"

interface Buttonprops {
   text:String;
   variant:"primary" | "secondary";
   startIcon?: ReactElement
   onClick?:()=>void
}

const variantClass={
   "primary":"bg-blue-500 text-white",
   "secondary": "bg-blue-200 text-blue-800"
}



const Button = ({text,variant,startIcon,onClick}:Buttonprops) => {
  return (
    <button className={variantClass[variant]+' '+"py-2 px-4 rounded-md flex items-center gap-1"} onClick={onClick}>
        {startIcon}
        {text}</button>
  )
}

export default Button