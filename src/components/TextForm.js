import React, {useState} from 'react'
 
export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" +  text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upperCase!", "success");
  }

  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" +  text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowerCase!", "success");
  }

  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" +  text);
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!", "success");
  }


  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value)
  }

  const handleCopy = ()=> {
    // console.log("I am copy");
    // var text = document.getElementById("myBox");
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }

  const handleExtraSpaces = ()=> {
    // console.log("Rmove Extra Spaces")
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
  }
  

  const [text, setText] = useState('');
 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>  
          </div>    
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercse</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>



    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summury</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </>
  )
}
