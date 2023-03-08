import React from 'react'

export default function ColorPicker(props) {

    const colorChange = ()=>{
        const defaultColor = "#0000ff";
        window.addEventListener("load", updateFirst, false);
       let colorPalette = document.querySelector("#colorpalette");
        //colorPalette.value = defaultColor;
        colorPalette.addEventListener("input", updateFirst, false);   
        colorPalette.addEventListener("change", updateFirst, false);     
        colorPalette.select();
      }

      const updateFirst = (event)=>{
        
        const textdata = document.querySelector("h4");
        const colorPalette = document.querySelector("#colorpalette");
        const resColor = document.querySelector("#resColor");
       

        if (textdata) {   
            
          textdata.style.color = event.target.value;
          colorPalette.value=event.target.value;
          resColor.value =event.target.value;
        }
      }


    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container">
            <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>Color Picker</h1>
            <label>Color:</label>
            <input type="color" value="#ff0000" id="colorpalette" onChange={colorChange} />
            <h3>Result:</h3>
            Color code:  <input type="text" readOnly id="resColor" />
            <h4>Here the paragraph colors change when you select color from color picker</h4>
        </div>
    )
}