import React from 'react';
import "../App.css";
const Weather = (props) => {
    return(
        props.data.isCelsiusDegree === true ? 
    <div>
        <p> Temperature: {props.degreesValue} Celsius</p>
        <button className="button-class button2" onClick={() => props.data.changetoOtherValue(false)}>Convert to Fahrenheit</button>
    </div> :
    <div>
    <p> Temperature: {(32 + (props.degreesValue * 1.8)).toFixed(2)} Fahrenheit</p>
    <button className="button-class button2" onClick={() => props.data.changetoOtherValue(true)}>Convert to Celsius</button>
</div>
    )
}
export default Weather;