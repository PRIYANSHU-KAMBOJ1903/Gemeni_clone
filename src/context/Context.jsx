import { createContext, useState } from "react";
import runChat from "../config/gemeni";

export const Context=createContext();

const ContextProvider=(props)=>{
  const [input,setInput]=useState("");
  const [recentPrompt,setRecentPrompts]=useState("");
  const [prevPrompts,setPrevPrompts]=useState([]);
  const [showResult,setShowResult]=useState(false);
  const [loading,setLoading]=useState(false);
  const [resultData,setResultData]=useState("");
  const delayPrar=()=>{};
  const onSent=async(prompt)=>{
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setRecentPrompts(input)
    const response= await runChat(input);
    let responseArray=response.split("**");
    let newResponse;
    for(let i=0;i<responseArray.length;i++){
      if(i===0||i%2 !== 1){
        newResponse+=responseArray[i];
      }
      else{
        newResponse+="<b>"+responseArray[i]+"</b>"
      }
    }
    
    setResultData(newResponse);
    setLoading(false);
    setInput(""); 
  }
  // onSent("Tell me a jock");
  const contextValue={
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompts,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    runChat
  }
  return (<Context.Provider value={contextValue}> 
    {props.children}
  </Context.Provider>);
}
export default ContextProvider;