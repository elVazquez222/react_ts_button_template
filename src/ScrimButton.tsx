import React from 'react';
import './ScrimButton.css';

interface ICustomButtonProps {
    
    /** Basic default styles submit | cancel */
    defaultButtonStyle: 'submit' | 'cancel';

    /** The text to be shown on the button */
    label: string;

    /** The hex code of the buttons background color */
    colorHexCode?: string;

    /** The function that will be invoked on click (for example a form submitHandler) */
    onClick: () => void;
    
    /** Defaults to "1em" */
    padding: string;
    
    /** Defaults to "16px" */
    fontSize: string;
    
    /** When true, sets a default style with animation */
    fancy: boolean;
    
    /** When provided renders an image (best SVG) on the button */
    imageUrl?: string;
}

export default function ScrimButton(props: ICustomButtonProps): React.ReactElement {
    
    let buttonClassName = props.defaultButtonStyle === 'submit' ? 'submit-btn' : 'cancel-btn';
    buttonClassName += props.fancy === true ? ' fancy' : '';
    
    const style = buildStyleObject();
    
    function buildStyleObject() {
        
        const { colorHexCode, padding, fontSize } = props;
        let style = {background: colorHexCode}
        
        if (padding !== 'default') {
            style = Object.assign({ padding }, style)    
        }
        
        if (fontSize !== 'default') {
            style = Object.assign({ fontSize }, style)    
        }
        
        return style;
    } 
    
    return(
        <React.Fragment>
            <div 
                className={`btn ${buttonClassName}`} 
                style={style}
                onClick={props.onClick} 
            >
                {props.label}
            </div>
            {props.imageUrl !== undefined && (               
                <img
                    src={props.imageUrl}
                    className="image"
                /> 
            )}
        </React.Fragment>
    );
}
