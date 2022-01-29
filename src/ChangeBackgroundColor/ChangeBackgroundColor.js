import React from 'react';
import './ChangeBackgroundColor.css';

const changeBackgroundColor = (props) => {
    return (
        <div className='ChangeBackgroundColor'>
            <div>{props.text}</div>
            <input type="text" type={props.inputType} onChange={props.changed} style={{backgroundColor: props.color}} placeholder={props.placeholder}/>
            <button onClick={props.firstOnclick} style={{backgroundColor: props.color}}>
                {props.innerFirstBtn}
            </button>
            <button onClick={props.secondOnclick} hidden={props.hidden} style={{backgroundColor: props.color}}>
                {props.innerSecondBtn}
            </button>
        </div>
    )
}

export default changeBackgroundColor;