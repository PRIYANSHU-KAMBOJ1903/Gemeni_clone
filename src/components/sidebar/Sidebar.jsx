import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Sidebar = () => {
        const [extended,setExtended]=useState(false);
        const {onSent,prevPrompts,setRecentPrompts}=useContext(Context);
        const loadprompt= async(prompt)=>{
          setRecentPrompts(prompt);
          await onSent(prompt);

        }
  return (
    <div className="sidebar">
      <div className="top">
            <img onClick={()=>{setExtended(prev=>!prev)}} src={assets.menu_icon} className="menu" alt="" />
            <div className="new_chat">
                <img onClick={()=>setExtended(prev=>!prev)} src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            
            {extended? <div className="recent">
                <p className="recent_title">Recent</p>
                 {prevPrompts.map((item,index)=>{
                   return (<div key={index} onClick={()=>loadprompt(item)} className="recent_entry">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)} ...</p>
                </div>);
                 })}
                
            </div>:null}
           
      </div>

      <div className="bottem">
       
            <div className="bottem_item recent_entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null} 
            </div>
            <div className="bottem_item recent_entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
        <div className="bottem_item recent_entry">
            <img src={assets.setting_icon} alt="" />
             {extended?<p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
