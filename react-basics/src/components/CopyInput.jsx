import React,{useState} from 'react';
import PopupContent from './PopupContent';
const CopyInput = () => {
  const [inputVal,setInputVal]=useState('');
  const [copied,setCopied]=useState(false);
  const handleCopy=()=>{
    navigator.clipboard.writeText(inputVal).then(()=>{
      setCopied(true)
      setTimeout(()=>setCopied(false),2000);
    })
  }
  return (
    <>
      <input type="text" value={inputVal} onChange={e=>setInputVal(e.target.value)}/>
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied}/>
    </>
  )
}

export default CopyInput