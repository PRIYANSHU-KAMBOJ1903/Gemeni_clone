import React, { useContext } from 'react'
import "../main/Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';
import runChat from '../../config/gemeni';
const Main = () => {
  const {prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompts,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    newChat}=useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
            <p>Gemeni</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main_container">
          {!showResult?
          <>
              <div className="greed">
                        <p><span>Hello,Dev.</span></p>
                        <p>How can I help You Today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest Beautiful Places to see an Upcoming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                        </div>
          </>
            :<div className='result'>
              <div className="result_title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result_data">
                <img src={assets.gemini_icon} alt="" />
                {loading?<div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                
              </div>
              </div>}
                

                
                <div className="main_bottom">
                    <div className="search_box">
                        <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter Your Promt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" onClick={()=>onSent(input)}/>
                        </div>
                    </div>
                    <div className="bottom_info">
                      <p>  Gemini may display inaccurate info, including about people,so double checks its responses.Your privacy and Gemini Apps</p>
                    </div>
                </div>
            
        </div>

      </div>
    </>
  )
}

export default Main
