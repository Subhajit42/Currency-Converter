import React , {useState} from 'react'


export default function InputCurrency() {

  //FUNCTIONS USED--
  const inpValueCurr = (event) => {
      setVal(event.target.value);   
  }


  const Converter = () =>{
    if (option1 < option2){
      const expo = -1;
      if ((option1 == 1) && (option2 == 2)){
            setVal2(val*82**(expo));                // US DOLLAR
      }
    }else{
      if (option1 == option2){
            setVal2(val);                           // EQUAL CONVERSION
      }else{
            if (option1 > option2){
                  if ((option1 == 2) && (option2 == 1)){
                    const expo = 1;
                    setVal2(val*82**(expo));        // INR
                  }
            }
      }
    }

  }


  
//state variables
const [val,setVal] = useState(0);
const [val2,setVal2] = useState(0);
const [option1,setOption1] = useState(0);
const [option2,setOption2] = useState(0);

  return (
    <>

    <div className="input-group mb-3 mx-4 my-4">
        <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01" value={option1} onChange={event=>setOption1(event.target.value)}>
            <option defaultValue>--Choose--</option>
            <option value="1">Rupee</option>
            <option value="2">Dollar</option>
        </select>
    </div>

    
    {/* INPUT for currency to be changed */}
    <div className="inputCurrency">
        <input type="number" className="inputCurr mx-4" onChange={inpValueCurr} value={val} />

        <button type="button" className="btn btn-success mx-4" onClick={Converter} >Convert</button>
    </div>
    
    
    
    <div className="input-group mb-3 mx-4 my-4">
        <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01" value={option2} onChange={event=> setOption2(event.target.value)}>
            <option defaultValue>--Choose--</option>
            <option value="1">Rupee</option>
            <option value="2">Dollar</option>
            </select>
    </div>


    
    
    {/* OUTPUT Currency */}
    <div className="outputCurrency-border mx-4">
      <textarea rows={1} cols={23} value={val2} readOnly></textarea>
    </div>


    </>
  )
}
