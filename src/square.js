import React from 'react';
import ReactDOM from 'react-dom';
function Square(props) {
 return (
         <div>
  <button className="square" onClick={props.onClick}>
   {props.value}
  </button>
             </div>
 );
}


export default Square;
