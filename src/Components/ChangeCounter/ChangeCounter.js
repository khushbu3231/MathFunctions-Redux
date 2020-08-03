import React from 'react';
import './changeCounter.css'
const ChangeCounter=(props)=>{
    return(
        <div className="changeCounter" onClick={props.click}>
           {props.label}
        </div>
    )
}
export default ChangeCounter;
