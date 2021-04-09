import React from 'react';

export default function Input(props) {

    const defaultMaxLength = 16;

    function onFocusInput(event: React.MouseEvent) {
        event.target.select();
    }
    
    return <input  
                className="inputFiled" 
                type={props.type === undefined ? "text" : props.type}
                value={props.value}
                onChange={props.onChange}
                onFocus={onFocusInput.bind(this)}
                maxLength={props.maxLength ? props.maxLength : defaultMaxLength}
                placeholder={props.placeholder ? props.placeholder : ''}
            />
}