import React from 'react';

interface IInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    defaultValue?: string;
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
                onChange={props.onChange}
                onFocus={onFocusInput.bind(this)}
                maxLength={props.maxLength ? props.maxLength : defaultMaxLength}
                placeholder={props.placeholder ? props.placeholder : ''}
                defaultValue={props.defaultValue ?? ''}
            />
}