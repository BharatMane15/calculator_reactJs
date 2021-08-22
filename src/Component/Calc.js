import React, { useState } from "react";
import "./Calc.css";
import BackspaceIcon from '@material-ui/icons/Backspace';

const Calc = () => {
  const [answer, setAnswer] = useState([]);
  const [opration, setOpration] = useState(["%", "*", "+", "-", "=",]);
  const [hold, setHold] = useState('');
  const [display, setDisplay] = useState('');

  
  function handleClick(e){ 
    if(e.target.name != "="){
      setDisplay(display.concat(e.target.name))
    }  
    else{
      isEqual()
    }
    if(!opration.includes(e.target.name)) {
      console.log('if')
      setHold(hold.concat(e.target.name));
    } else {
       console.log('elel', e.target.name)
       if(hold.length > 0){
        answer.push(hold) 
        setAnswer([...answer])
        setHold("")
       }
       if(e.target.name != "=") {
        let temp = [...answer];
        temp.push(e.target.name);
        setAnswer([...temp]);
       }
       
    }

    console.log(answer);
  };

  // const allClear = () => {
  //   setAnswer("");
  // };
  function isEqual(){
    let ans = eval(display)
    setAnswer([])
    answer.push(ans)  
    setDisplay(ans.toString());
  }

  const getString = (answer) => {
    let temp = "";
    answer.forEach((element) => {
      temp = temp + element;
    });
    return temp;
  };
    const allRemove=()=>{
      setDisplay("");
    }
    const oneBack=()=>{
       setDisplay(display.slice(0, display.length-1));
    }


  return (
    <div>
      <div className="container">
        <div className="box">
       
          <input
            className="Answer"
            type="text"
            placeholder="0"
            value={display}
          />
          <div className="section-A">

           
            {/* <button onClick={allClear} className="btn1" name="AC">
              AC
            </button> */}
            <button onClick={allRemove} className="btn1" name="AC">AC</button>
            <button onClick={handleClick} className="btn1" name="%">
              %
            </button>
            <button onClick={handleClick} className="btn1" name="/">
              /
            </button>
          </div>
          <div className="section-B">
            <button onClick={handleClick} className="btn" name="7">
              7
            </button>
            <button onClick={handleClick} className="btn" name="8">
              8
            </button>
            <button onClick={handleClick} className="btn" name="9">
              9
            </button>
            <button onClick={handleClick} className="btn1" name="*">
              *
            </button>
          </div>

          <div className="section-B">
            <button onClick={handleClick} className="btn" name="4">
              4
            </button>
            <button onClick={handleClick} className="btn" name="5">
              5
            </button>
            <button onClick={handleClick} className="btn" name="6">
              6
            </button>
            <button onClick={handleClick} className="btn1" name="-">
              -
            </button>
          </div>

          <div className="section-B">
            <button onClick={handleClick} className="btn" name="1">
              1
            </button>
            <button onClick={handleClick} className="btn" name="2">
              2
            </button>
            <button onClick={handleClick} className="btn" name="3">
              3
            </button>
            <button onClick={handleClick} className="btn1" name="+">
              +
            </button>
          </div>
          <div className="section-B">
            <button onClick={oneBack} className="btn1" name="c">
              <BackspaceIcon />
            </button>
            <button onClick={handleClick} className="btn" name="0">
              0
            </button>
            <button onClick={handleClick} className="btn1" name=".">
              .
            </button>
            <button onClick={(e)=>{handleClick(e)}} className="btn1" name="=">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
