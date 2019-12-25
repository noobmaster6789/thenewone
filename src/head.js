import ReactDOM from 'react-dom'
import React from 'react';
import './index.css';

class Intro extends React.Component{
    render(){
        return(
<div className="title-opening">
<h1>TIC-TAC-TOE -> THE REAL GAME FOR THE REAL MEN</h1>
<p><b>RULE</b>: 3 same objects in a row , u will be the winner</p>
</div>
               );
        
    }
}

ReactDOM.render(<Intro />,document.getElementById("root"));
export default Intro;



