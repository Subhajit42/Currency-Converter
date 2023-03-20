import React , {useState} from 'react'

export default function InputCurrency() {
  const inpValueCurr = (event) => {
      setVal(event.target.value);   
  }

  const outValueCurr = () =>{
      setVal2(val*2);
  }

  const print = () =>{
    console.log("hi");
  }

const [val,setVal] = useState(0);
const [val2,setVal2] = useState(0);

  return (
    <>

    <div className="input-group mb-3 mx-4 my-4">
        <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01">
            <option defaultValue>--Choose--</option>
            <option value="1" addActivityItem={print} >Rupee</option>
            <option value="2">Dollar</option>
        </select>
    </div>

    {/* INPUT for currency to be changed */}
    <div className="inputCurrency">
        <input type="number" className="inputCurr mx-4" onChange={inpValueCurr} value={val} />
        <button type="button" className="btn btn-success" onClick={outValueCurr} >Convert</button>
        <button type="button" className="btn btn-primary" >Convert</button>
    </div>
    
    
    
    <div className="input-group mb-3 mx-4 my-4">
        <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Currency</label>
        </div>
        <select className="custom-select" id="inputGroupSelect01">
            <option defaultValue>--Choose--</option>
            <option value="1">Rupee</option>
            <option value="2">Dollar</option>
            </select>
    </div>


    {/* OUTPUT Currency */}
    <div className="outputCurrency-border mx-4">
      <textarea rows={1} cols={23} value={val2}></textarea>
      {/* {val2} */}
    </div>
    </>
  )
}
