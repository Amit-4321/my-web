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


    const [text, setText] = useState("Enter Text here");
 //text='new text';//wrong way
 //setText('new text');// correct way
    return (
        <>
        <div className='container'>
    <h1>{props.heading}</h1> 
  <div className="mb-3">

       <textarea className="form-control"value={text} onChange={handleOnChange}id="MyBox" rows="7"></textarea>
  </div>
  <button className="btn btn-primary"onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary m-1"onClick={handleloClick}>Convert to lowercase</button>
  <button className="btn btn-primary m-1"onClick={handleclearClick}>Clear text</button>
  <button className="btn btn-primary m-1"onClick={handleCopy}>Copy text</button>
  <button className="btn btn-primary m-1"onClick={handleExtraSpaces}>Remove extra spaces</button>
   </div>
   <div className='conatiner my-3'>
    <h1>Your text summary</h1>

    <p> {text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
   </>
  )
}
