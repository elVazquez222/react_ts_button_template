import React from 'react';

interface IInputProps {
    value: string | boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    maxLength?: number;
    placeholder?: string;
    type?: 'text' | 'color' | 'checkbox' | undefined;
    id?: string;
}

export default function Input(this: HTMLInputElement, props: IInputProps) {

    const defaultMaxLength = 16;

    function onFocusInput(event: React.FocusEvent<HTMLInputElement>) {
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