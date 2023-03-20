import React from 'react'

export default function InputCurrency() {
  return (
    <>

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

    {/* INPUT for currency to be changed */}
    <div className="inputCurrency">
        <input type="number" className="inputCurr mx-4"/>
        <button type="button" className="btn btn-success">Convert</button>
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
    <div className="outputCurrency">

    </div>
    </>
  )
}
