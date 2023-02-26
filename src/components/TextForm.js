import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('Uppercase was clicked' + text);
        let newText=text.toUpperCase();
        setText(newText)
         
    }
    const handleloClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    
    const handleclearClick = ()=>{
        let newText="";
        setText(newText)
    }
    const handleCopy = () => {
         var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange=(event)=>{
        //console.log('On change');
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }


    const [text, setText] = useState("Please Text Here");
 //text='new text';//wrong way
 //setText('new text');// correct way
    return (
        <>
        <div className='container'>
    <h1>{props.heading}</h1> 
  <div className="mb-3">

       <textarea className="form-control"value={text} onChange={handleOnChange}id="MyBox" rows="7"></textarea>
  </div>
  
  <button className="btn btn-primary "onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-danger m-2"onClick={handleloClick}>Convert to lowercase</button>
  <button className="btn btn-success m-2"onClick={handleclearClick}>Clear text</button>
  <button className="btn btn-primary m-2"onClick={handleCopy}>Copy text</button>
  <button className="btn btn-success m-2"onClick={handleExtraSpaces}>Remove extra spaces</button>
   </div>
   
   
   </>
  )
}
