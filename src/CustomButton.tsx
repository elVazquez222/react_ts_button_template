import React from 'react';

export default function CustomButton(props) {
    
    let buttonClassName = props.defaultButtonStyle === 'submit' ? 'submit-btn' : 'cancel-btn';
    buttonClassName += props.fancy === true ? ' fancy' : '';
    
    const style = buildStyleObject();
    
    function buildStyleObject() {
        
        const { colorHexCode, padding, fontSize } = props;
        let style = {background: props.colorHexCode}
        
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
                {props.buttonText}
            </div>
            {props.peepUrl !== undefined && (               
                <img
                    src={props.peepUrl}
                    className="peep"
                /> 
            )}
        </React.Fragment>
    );
}

/* provide the following props to your Scrimbutton:

    // the text to be shown on the button
    label: string 

    // the hex code of the buttons background color
    colorHexCode: string

    // the function that will be invoked on click (for example a form submitHandler)
    onClick: () => {}
    
    // defaults to "1em"
    padding: string
    
    // defaults to "16px"
    fontSize: string
    
    // when true, sets a default style with animation
    fancy: boolean
    
    // when provided renders an SVG next to the button
    peepUrl: string

*/