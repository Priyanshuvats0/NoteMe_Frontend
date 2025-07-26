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
       const [deleted,setDeleted]=useState(false);
       
       useEffect(()=>{
        refresh();
          
       },[show,deleted]);


   

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
          {content.map(({type,link,title,_id})=>{
           
              return  <Card   key={_id} type={type} link={link} title={title} id={_id}  onDelete={() => setDeleted(!deleted)}  />
          })}
          
       
        
        </div>
      </div>
      </div>
  )
}

export default Dashboard