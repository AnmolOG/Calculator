import React, { useState } from "react";
const Calculator = () => {
  const [number1, setNumber1] = useState() 
  const [number2, setNumber2] = useState()
  const [result, setResult] = useState()
  return (
    <div className="container my-2">
      <h2 className="my-2">Calculator App</h2>
      <div className="flex row my-3" style={{ maxWidth: "20vw" }}>
        <label htmlFor="number1">Enter number 1</label>
        <input type="number" className="mb-3" value={number1} onChange={(e)=>setNumber1(e.target.value)} />

        <label htmlFor="number2">Enter number 2</label>
        <input type="number" className="mb-3" value={number2} onChange={(e)=>setNumber2(e.target.value)} />
      </div>

      <div className="flex my-2">
        <button className="btn btn-primary mx-3" onClick={()=>{setResult(Number(number1)+Number(number2))}}>Add</button>
        <button className="btn btn-primary mx-3" onClick={()=>{setResult(Number(number1)-Number(number2))}}>Subtract</button>
        <button className="btn btn-primary mx-3" onClick={()=>{setResult(Number(number1)*Number(number2))}}>Multiply</button>
        <button className="btn btn-primary mx-3" onClick={()=>{setResult(Number(number1)/Number(number2))}}>Divide</button>
      </div>
      <h5 className="my-2">Result is : {result}</h5>
    </div>
  );
};

export default Calculator;
