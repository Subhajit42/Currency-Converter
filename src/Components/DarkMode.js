import React,{useState} from 'react'
let mode;
export default function DarkMode() {
    const [myStyle,setStyle] = useState({
        color: "white",
        backgroundColor: "black"
    })

    function ModeChange(){
        if (myStyle.color ==='white'){
            setStyle({
                color: "black",
                backgroundColor: "white"
            })
            let mode='light'
        }else{
            setStyle({
                color: "white",
        backgroundColor: "black"
            })
            let mode='dark'
        }
    }
        
  return (
    <>
      <button type="button" className="btn btn-dark my-3 mx-3" style={myStyle} onClick={ModeChange} >Dark Mode</button>
    </>
  );
}

export {mode};