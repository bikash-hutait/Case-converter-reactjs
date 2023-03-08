import React, {useState} from 'react'

export default function Textform(props) {
    const handdleUppercase = ()=> {
        //console.log('I am clicked');
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase", "success");
    }
    const handdleLowercase = ()=> {
        //console.log('I am clicked');
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase", "success");
    }
    
    const handdleClear = ()=> {   
        
        setText("");
    }
    

    const handdleUppercasechange = (event)=> {
       setText(event.target.value)
    }

    const countWords = (str)=> {
        const arr = str.split(' ');      
        return arr.filter(word => word !== '').length;
    }

  const copyToClipboard = ()=> {
    navigator.clipboard.writeText(text); 
    props.showAlert("Text copied to Clipboard", "success");
  }

  const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
  }

  const handleCapitalizeWord = ()=> {
    const str1 = text.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < str1.length; i++) {
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = str1.join(" ");
setText(str2);
 props.showAlert("Converted to Capitalize case!", "success");

  }
    const [text, setText] = useState('');
   
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>  
        <div className="mb-3">
        <h2>{ props.heading }</h2>
        <textarea onChange={handdleUppercasechange} value={text} className="form-control" id="mybox" rows="5"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handdleUppercase}>UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handdleLowercase}>lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>Copy To Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeWord}>Capitalize Word</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handdleClear}>Clear</button>

    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Your Text Summary:</h3>
        <p>{countWords(text)} words and {text.length} characters</p>
    </div>

     <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Preview Result:</h3>
        <p>{text}</p>
    </div>

    </>
  )
}
