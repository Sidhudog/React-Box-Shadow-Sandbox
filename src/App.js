
import './App.css';
import React,{useState} from 'react'
// import {Switch} from "@material-ui/core";


function App() {
  const [horiLen,setHoriLen] = useState(0)
  const [vertiLen, setvertiLen] = useState(0);
  const [blur, setBlur] = useState(0);
  const [shadowcolor, setShadowColor] = useState("black");
  const [boxcolor, setBoxColor] = useState("#252A34");


    const labelstyle = {
    color : "white",
    fontSize : '20px',
    margin:'5px',
    fontWeight:'bold'
  }


  const outputStyle = {
    backgroundColor: `${boxcolor}`,
    boxShadow: `${horiLen}px ${vertiLen}px ${blur}px ${shadowcolor}`,
  };



  const headingStyle = {
    fontSize:'30px',
    fontWeight:'700',
    fontFamily:'Roboto',
  }

  const normalStyle = {
    fontSize: "20px",
    fontWeight: "700",
    fontFamily: "Roboto",
  };

console.log(horiLen,vertiLen,blur)
  return (
    <div className="App">
      {/* <Switch color="primary" size="small" /> */}
      <div style={headingStyle}>React Box Shadow Visualizer</div>
      <div style={normalStyle}>
        {`box-shadow : ${horiLen}px ${vertiLen}px ${blur}px ${shadowcolor};`}
      </div>
      <div style={normalStyle}>{`background-color : ${boxcolor};`}</div>
      <div className="Visualiser">
        <div className="Controls">
          <label style={labelstyle}>Horizontal Offset</label>
          <input
            type="range"
            min="-20"
            max="20"
            value={horiLen}
            onChange={(e) => {
              setHoriLen(e.target.value);
            }}
          ></input>
          <label style={labelstyle}>Vertical Offset</label>
          <input
            type="range"
            min="-20"
            max="20"
            value={vertiLen}
            onChange={(e) => {
              setvertiLen(e.target.value);
            }}
          ></input>
          <label style={labelstyle}>Blur </label>
          <input
            type="range"
            min="0"
            max="20"
            value={blur}
            onChange={(e) => {
              setBlur(e.target.value);
            }}
          ></input>
          <label style={labelstyle}>Box Colour </label>
          <input
            type="color"
            value={boxcolor}
            onChange={(e) => {
              setBoxColor(e.target.value);
            }}
          ></input>
          <label style={labelstyle}>Shadow Colour </label>
          <input
            type="color"
            value={shadowcolor}
            onChange={(e) => {
              setShadowColor(e.target.value);
            }}
          ></input>
        </div>
        <div className="Output" style={outputStyle}></div>
      </div>
    </div>
  );
}

export default App;
