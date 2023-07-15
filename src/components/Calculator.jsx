import { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
    const [result, setResult] = useState("")
    const [answer, setAnswer] = useState("")
    function handelChange(e){
        if(/^[\d+\-*%/.()\s]+$/.test(e.target.value))
           setResult(e.target.value);
    }

    const handelOnClick =(e)=>{
        e.preventDefault();
        if(e.target.value=="clear"){
            setResult("")
            setAnswer("")
        }
        else if(e.target.value=="Enter"){
            let p = eval(result)
            setAnswer(p)
        }
        else if(/^[\d+\-*%/.()\s]+$/.test(e.target.value)){
         setResult(result + e.target.value)
        }
    }

  return (
    <>
    <div className="calculator" >
    <h1 className='TitleOfCla'><em>Calculator</em></h1>
    <input className= "enterBox23" type="text"  onChange={handelChange} value={result}/>
    <br></br>
    <div className='Answer'>{answer}</div>
    <br></br>
    <input className={"btn"}  type="button" value="1" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="2" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="3" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="4" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="5" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="6" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="7" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="8" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="9" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="0" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="+" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="-" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="*" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="/" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="%" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="clear" onClick={handelOnClick}/>
    <input className={"btn"} type="button" value="Enter" onClick={handelOnClick}/>
    </div>
    </>
  )
}
