import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [numCount, setNumCount] = useState(0);

    function handleUpClick() {
        // console.log("Up click handler was clicked");
        setText(text.toUpperCase());
    }

    function handleLowClick() {
        setText(text.toLowerCase());
    }

    function handleClearClick() {
        setText("");
    }

    function handleAlterCaseClick() {
        let newText = "";
        for(let i = 0; i < text.length; ++i){
            if(text[i] >= 'a' && text[i] <= 'z') {
                newText += text[i].toUpperCase();
            }
            else if(text[i] >= 'A' && text[i] <= 'Z') {
                newText += text[i].toLowerCase();
            } else{
                newText += text[i];
            }
        }
        setText(newText);
    }

    function handleLinkExtractor() {
        let links = [];

        let lastSpace = -1;
        let n = text.length;
        for(let i = 0; i < n; ++i) {
            if(text[i] == '.') {
                
            }
        }
        
    }

    function handleChange(event) {
        // console.log("Change Handled");
        setText(event.target.value);

        if(text===""){
            setNumCount(0);
        }
        if(text[text.length-1] >= '0' && text[text.length-1] <= '9') {
            setNumCount(numCount + 1);
        }
    }

    return (
        <>
            <div className="my-3">
                <h1>Enter the text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8" placeholder="Enter text here"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleAlterCaseClick}>aLTER cASE</button>
                <button className="btn btn-primary mx-1" onClick={handleLinkExtractor}>Extract Links</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text===""?0:text.split(" ").length} words and {text.length} characters</p> 
                

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
    
}

