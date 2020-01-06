import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Dashboard from "./dashboard";
import { evaluate } from "./calcs";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const options = [
  'space',
  'ios',
   'appG',
   'soft'
];
const themes={
    ios:{op:'#FF9500',opCl:'#fff',fl:'#c4c4c4',flCl:"#333",bg:'#070707',
    no:'#393939',noCl:'#fff',ic:'#fff'},
    space:{op:'#0094e4',opCl:'#fff', fl:'#232428', flCl:'#fff',
    bg:'#1C1C1C',no:'#232428',noCl:'#fff',ic:'#fff'
    },
     appG:{op:'#51b55e',opCl:'#fff',fl:'#51b55e',flCl:"#fff",bg:'#4f5463',
    no:'#fff',noCl:'#1a1a1a',ic:'#fff'},
     soft:{op:'#866eff',opCl:'#fff',fl:'#f7f7f7',flCl:"#866eff",bg:'#f7f7f7',
    no:'#f7f7f7',noCl:'#866eff',ic:'#ABB4C6'},


}
const ITEM_HEIGHT = 40;

const App = () => {
  const [exp, setExp] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [theme,setTheme]=useState(themes['space']);
  const open = Boolean(anchorEl);
  const handleClick = op => {
    
    inputRef.current.value += op;
  };
   const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    if(e.length<7)setTheme(themes[e])
    setAnchorEl(null);
  };

  return (
    <div className="container" style={{background : theme['bg']}}>
      <div className="container__body">
        <div className="calculator">
          <div className="calculator__dashboard">
          <div className="menu">
            <IconButton style={{color : theme['op']}} aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleOpen}>
              
<svg version="1.1" id="Layer_1"   fill={theme['ic']} width = '24px' height = '24px' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve">
<g>
  <g>
    <g>
      <circle cx="256" cy="256" r="64"/>
      <circle cx="256" cy="448" r="64"/>
      <circle cx="256" cy="64" r="64"/>
    </g>
  </g>
</g>

</svg>


            </IconButton >
            <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200,
          },
        }}
      >
        {options.map(option => (
          <MenuItem key={option} selected={option === 'Space'} onClick={()=>{handleClose(option)}}>
            {option}
          </MenuItem>
        ))}
      </Menu>
          </div>
            <Dashboard ic={theme['ic']} op={theme['op']} exp={exp} inputRef={inputRef} results={results} />
          </div>
          <div className="calculator__operators">
            <div className="calculator__row">
              <Button
                className="special-operands"
                onClick={() => handleClick("$")}
                variant="contained"
                style={{background : theme['fl'] , color:theme['flCl']}}
              >
                <svg
                fill={theme['flCl']}
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  style={{ enableBackground: "new 0 0 48 48" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M35.494,0c-0.43,0-0.811,0.273-0.947,0.681L19.734,44.64L9.35,27.482C9.169,27.183,8.844,27,8.494,27h-8v2h7.437
		l11.208,18.518C19.321,47.819,19.646,48,19.994,48c0.036,0,0.072-0.002,0.109-0.006c0.387-0.043,0.714-0.306,0.838-0.675L36.213,2
		h11.293V0H35.494z"
                    />
                  </g>
                </svg>
              </Button>
              <Button
                className="special-operands"
                onClick={() => handleClick("^")}
                variant="contained"
                style={{background : theme['fl'] }}

              >
                <svg
                  fill={theme['flCl']}
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 451.847 451.846"
                  style={{ enableBackground: "new 0 0 451.847 451.846" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M248.292,106.406l194.281,194.29c12.365,12.359,12.365,32.391,0,44.744c-12.354,12.354-32.391,12.354-44.744,0
		L225.923,173.529L54.018,345.44c-12.36,12.354-32.395,12.354-44.748,0c-12.359-12.354-12.359-32.391,0-44.75L203.554,106.4
		c6.18-6.174,14.271-9.259,22.369-9.259C234.018,97.141,242.115,100.232,248.292,106.406z"
                    />
                  </g>
                </svg>
              </Button>
              <Button
                className="special-operands"
                onClick={() => handleClick("%")}
                variant="contained"
                style={{background : theme['fl'] }}
              >
                <svg
                                fill={theme['flCl']}

                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 263.285 263.285"
                  style={{ enableBackground: "new 0 0 263.285 263.285" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M193.882,8.561c-7.383-3.756-16.414-0.813-20.169,6.573L62.153,234.556c-3.755,7.385-0.812,16.414,6.573,20.169
		c2.178,1.107,4.499,1.632,6.786,1.632c5.466,0,10.735-2.998,13.383-8.205L200.455,28.73
		C204.21,21.345,201.267,12.316,193.882,8.561z"
                    />
                    <path
                      d="M113.778,80.818c0-31.369-25.521-56.89-56.89-56.89C25.521,23.928,0,49.449,0,80.818c0,31.368,25.521,56.889,56.889,56.889
		C88.258,137.707,113.778,112.186,113.778,80.818z M56.889,107.707C42.063,107.707,30,95.644,30,80.818
		c0-14.827,12.063-26.89,26.889-26.89c14.827,0,26.89,12.062,26.89,26.89C83.778,95.644,71.716,107.707,56.889,107.707z"
                    />
                    <path
                      d="M206.396,125.58c-31.369,0-56.89,25.521-56.89,56.889c0,31.368,25.52,56.889,56.89,56.889
		c31.368,0,56.889-25.52,56.889-56.889C263.285,151.1,237.765,125.58,206.396,125.58z M206.396,209.357
		c-14.827,0-26.89-12.063-26.89-26.889c0-14.826,12.063-26.889,26.89-26.889c14.826,0,26.889,12.063,26.889,26.889
		C233.285,197.294,221.223,209.357,206.396,209.357z"
                    />
                  </g>
                </svg>
              </Button>
              <Button
                              style={{background : theme['fl'] }}

                className="special-operands delete"
                onClick={() => {
                  let x = inputRef.current.value;
                  if (x.length && x !== "syntax error")
                    inputRef.current.value = x.substring(0, x.length - 1);
                }}
                variant="contained"
              >
                <svg
                fill={theme['flCl']}
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512.002 512.002"
                  style={{ enableBackground: "new 0 0 512.002 512.002" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M493.224,96.395H147.092c-5.283,0-10.321,2.222-13.883,6.128L4.896,243.354c-6.528,7.167-6.528,18.12,0,25.293
							l128.313,140.831c3.561,3.906,8.6,6.128,13.883,6.128h346.132c10.371,0,18.777-8.406,18.777-18.771V115.173
							C512.002,104.801,503.595,96.395,493.224,96.395z M474.447,378.051H155.385l-111.2-122.054l111.2-122.054h319.061V378.051z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M396.263,191.315c-7.386-7.286-19.266-7.217-26.558,0.163l-101.399,102.65c-7.286,7.38-7.217,19.266,0.163,26.558
							c3.662,3.612,8.425,5.414,13.194,5.414c4.838,0,9.689-1.865,13.363-5.577l101.399-102.65
							C403.712,210.493,403.643,198.607,396.263,191.315z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M396.889,293.334L294.245,191.941c-7.38-7.286-19.272-7.211-26.551,0.163c-7.292,7.38-7.223,19.266,0.156,26.558
							L370.494,320.06c3.662,3.612,8.425,5.414,13.194,5.414c4.838,0,9.689-1.865,13.357-5.583
							C404.338,312.512,404.269,300.625,396.889,293.334z"
                      />
                    </g>
                  </g>
                </svg>
              </Button>
            </div>
            <div className="calculator__row">
              <Button
              style={{background:theme['no'],color:theme['op'] }}
                variant="contained"
                className="AC"
                onClick={() =>{ setExp(""); inputRef.current.value='' }}
              >
                AC
              </Button>
              <Button style={{background:theme['no'],color:theme['noCl'] }} variant="contained" onClick={() => handleClick("(")}>
                (
              </Button>
              <Button style={{background:theme['no'],color:theme['noCl'] }} variant="contained" onClick={() => handleClick(")")}>
                )
              </Button>
              <Button
              style={{background:theme['op'] }}
                
                variant="contained"
                onClick={() => handleClick("/")}
                value="/"

              >
                <svg
                fill={theme['opCl']}
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 113.28 113.281"
                  style={{ enableBackground: "new 0 0 113.28 113.281" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M80.872,3.471l-60.903,98.662c-2.122,3.436-1.055,7.938,2.38,10.057c1.196,0.738,2.521,1.092,3.832,1.092
			c2.451,0,4.846-1.231,6.227-3.472l60.903-98.663c2.121-3.435,1.055-7.937-2.381-10.056C87.496-1.029,82.99,0.036,80.872,3.471z"
                      />
                    </g>
                  </g>
                </svg>
              </Button>
            </div>
            <div className="calculator__row">
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                onClick={() => handleClick("7")}
                variant="contained"
              >
                7
              </Button>
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                onClick={() => handleClick("8")}
                variant="contained"
              >
                8
              </Button>
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                onClick={() => handleClick("9")}
                variant="contained"
              >
                9
              </Button>
              <Button
                 style={{background:theme['op'] }}
                variant="contained"
                onClick={() => handleClick("*")}
              >
                <svg
                                fill={theme['opCl']}

                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 438.529 438.529"
                  style={{ enableBackground: "new 0 0 438.529 438.529" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M421.833,285.36c-2.573-9.801-8.233-17.179-16.991-22.128l-75.944-43.966l75.944-43.968
		c8.758-4.949,14.421-12.322,16.991-22.126c2.566-9.803,1.379-19.082-3.572-27.836L399.99,93.932
		c-4.948-8.757-12.319-14.419-22.127-16.989c-9.802-2.565-19.072-1.376-27.833,3.576l-75.944,43.677v-87.65
		c0-9.899-3.621-18.464-10.855-25.697C256,3.616,247.433,0,237.537,0h-36.54c-9.9,0-18.464,3.619-25.697,10.849
		c-7.232,7.232-10.85,15.798-10.85,25.697v87.65l-75.945-43.68c-8.757-4.952-18.036-6.145-27.837-3.576
		c-9.803,2.573-17.179,8.232-22.128,16.989l-18.271,31.405c-4.952,8.754-6.14,18.033-3.571,27.836
		c2.574,9.801,8.232,17.178,16.989,22.126l75.945,43.972l-75.945,43.966c-8.757,4.949-14.419,12.323-16.989,22.128
		c-2.568,9.801-1.377,19.075,3.571,27.829l18.272,31.408c4.947,8.761,12.32,14.421,22.126,16.995
		c9.805,2.562,19.08,1.375,27.837-3.58l75.945-43.681v87.655c0,9.891,3.617,18.466,10.85,25.694
		c7.233,7.234,15.8,10.848,25.697,10.848h36.54c9.896,0,18.466-3.613,25.693-10.848c7.238-7.229,10.855-15.804,10.855-25.694
		v-87.648l75.944,43.681c8.761,4.948,18.031,6.143,27.833,3.573c9.804-2.574,17.179-8.23,22.127-16.991l18.271-31.405
		C423.212,304.438,424.4,295.161,421.833,285.36z"
                    />
                  </g>
                </svg>
              </Button>
            </div>
            <div className="calculator__row">
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                onClick={() => handleClick("4")}
                variant="contained"
              >
                4
              </Button>
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                onClick={() => handleClick("5")}
                variant="contained"
              >
                5
              </Button>
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                onClick={() => handleClick("6")}
                variant="contained"
              >
                6
              </Button>
              <Button
                 style={{background:theme['op'] }}
                variant="contained"
                onClick={() => handleClick("-")}
              >
                <svg
                                fill={theme['opCl']}

                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 42 42"
                  style={{ enableBackground: "new 0 0 42 42" }}
                  xmlSpace="preserve"
                >
                  <path
                    d="M37.059,16H26H16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16h10h11.059C39.776,26,42,23.718,42,21
	S39.776,16,37.059,16z"
                  />
                </svg>
              </Button>
            </div>
            <div className="calculator__row">
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                onClick={() => handleClick("1")}
                variant="contained"
              >
                1
              </Button>
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                onClick={() => handleClick("2")}
                variant="contained"
              >
                2
              </Button>
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                onClick={() => handleClick("3")}
                variant="contained"
              >
                3
              </Button>
              <Button
                 style={{background:theme['op'] }}
                variant="contained"
                onClick={() => handleClick("+")}
              >
                <svg fill={theme['opCl']} viewBox="0 0 448 448" xmlns="http://www.w3.org/2000/svg">
                  <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
                </svg>
              </Button>
            </div>
            <div className="calculator__row">
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                variant="contained"
                onClick={() => handleClick("0")}
              >
                0
              </Button>
              <Button
                className="numbers" style={{background:theme['no'],color:theme['noCl'] }}
                variant="contained"
                onClick={() => handleClick(".")}
              >
                .
              </Button>
              <Button
               style={{background:theme['op'] }}
                className="primary"
                variant="contained"
                onClick={() => {
                	if(inputRef.current.value){
                  let x = evaluate(inputRef.current.value);
                  if ((x && (/^\d+$/.test(x) || !x.isNaN)) || x === "0") {
                    let res = results;
                    res.unshift({ exp: inputRef.current.value, res: x });
                    setResults(res);
                    setExp(x);
                  } else setExp("syntax error");
                }}
            }
              >
                <svg
                fill={theme['opCl']}
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="121.805px"
                  height="121.805px"
                  viewBox="0 0 121.805 121.805"
                  style={{ enableBackground: "new 0 0 121.805 121.805" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M7.308,85.264h107.188c4.037,0,7.309-3.271,7.309-7.31s-3.271-7.309-7.309-7.309H7.308C3.271,70.646,0,73.916,0,77.954
			S3.271,85.264,7.308,85.264z"
                      />
                      <path
                        d="M7.308,51.158h107.188c4.037,0,7.309-3.272,7.309-7.309c0-4.037-3.271-7.308-7.309-7.308H7.308
			C3.271,36.541,0,39.812,0,43.849C0,47.886,3.271,51.158,7.308,51.158z"
                      />
                    </g>
                  </g>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
