import Button from '..//components/Button'
import { HiPlus } from "react-icons/hi";
import { IoShareSocialSharp } from "react-icons/io5";
import Card from '../components/Card';
import ContentModel from '../components/ContentModel';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useContent } from '../hooks/useContent';

const Dashboard = () => {

       const [show,setShow]=useState(false);
       const {content,refresh}=useContent();
       
       useEffect(()=>{
        refresh;
       },[show]);

  return (
    
    <div className='flex'>
      <Sidebar/>
    <div className='p-4 bg-slate-300 w-full h-screen'>
        <ContentModel   show={show}  close={()=>{setShow(!show)}}/>
          <div className='flex justify-end gap-4'>
        <Button onClick={()=>{setShow(!show)}} text="Create Note" variant="primary" startIcon={<HiPlus  />}/>
        <Button  text="Share Note" variant="secondary" startIcon={<IoShareSocialSharp/>}/>
        </div>
        <div className='flex gap-4 flex-wrap pt-4 '>
          {content.map(({type,link,title})=>{
           
              return  <Card type={type} link={link} title={title}/>
          })}
          { console.log(content)}
       
        
        </div>
      </div>
      </div>
  )
}

export default Dashboard