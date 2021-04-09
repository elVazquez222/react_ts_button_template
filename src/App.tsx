import React, { useState } from 'react';
import CustomButton from './CustomButton';
import Input from './Input';
import DropDownContainer from './DropDownContainer';
import './styles.css'

export default function App() {

    const [inputFirstButtonLabel, setInputFirstButtonLabel] = useState('Submit');
    const [inputSecondButtonLabel, setInputSecondButtonLabel] = useState('Cancel');
    
    const [inputFirstButtonColor, setInputFirstButtonColor] = useState('#339934');
    const [inputSecondButtonColor, setInputSecondButtonColor] = useState('#cc0000');
    
    const [inputGeneralButtonPadding, setInputGeneralButtonPadding] = useState('default');
    const [inputGeneralFontSize, setInputGeneralFontSize] = useState('default');
    const [inputFancyStyle, setInputFancyStyle] = useState(false);
    const [inputWithPeep, setInputWithPeep] = useState(false);
    
    const positivePeepSvgUrl = 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5357a8c992500f5fc84f40_peep-52.svg';
    const negativePeepSvgUrl = 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5359ee8becbf772f53c5d4_peep-71.svg';
    
    // LABEL
    function handleChangeFirstButtonLabelInput(event) {
        setInputFirstButtonLabel(event.target.value);
    }   
    
    function handleChangeSecondButtonLabelInput(event) {
        setInputSecondButtonLabel(event.target.value);
    }     
    // COLOR
    function handleChangeFirstButtonColorInput(event) {
        setInputFirstButtonColor(event.target.value);
    }
    
    function handleChangeSecondButtonColorInput(event) {
        setInputSecondButtonColor(event.target.value);
    }
    // PADDING
    function handleChangePaddingInput(event) {
        
        if (event.target.value === '') {

            setInputGeneralButtonPadding('default');   
            return;
        }
        
        setInputGeneralButtonPadding(event.target.value);
    }
    // FONT SIZE
    function handleChangeFontSizeInput(event) {
        
        if (event.target.value === '') {

            setInputGeneralFontSize('default');   
            return;
        }
        
        setInputGeneralFontSize(event.target.value)    ;
    }
    // FANCY
    function handleFancyChange() {
        setInputFancyStyle(!inputFancyStyle);
    }
    // PEEPS
    function handleWithPeepChange() {
        setInputWithPeep(!inputWithPeep)
    }
    
    function getButtonColor(colorHexCode) {
        
        if (colorHexCode.length < 7) {
            return undefined;
        }
        
        if (!isValidColor(colorHexCode)) {
            
            console.warn('User tried to set crazy color value! => ', colorHexCode)
            // maybe do some logging here to see how often users try to e.g. use RGB color code
            return undefined;
        }
        return colorHexCode;
    }
    
    function isValidColor(colorCode) {
        // credits: found regex on https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
        return /^#[0-9A-F]{6}$/i.test(colorCode)
    }
    
    function renderInputs() {
        
        return (
            <React.Fragment>
                <div className="optionSet labelInputs">
                
                    <h3>Set a label: </h3>                    
                    <Input 
                        value={inputFirstButtonLabel} 
                        onChange={handleChangeFirstButtonLabelInput.bind(this)}
                    />
                    
                    <Input 
                        value={inputSecondButtonLabel} 
                        onChange={handleChangeSecondButtonLabelInput.bind(this)}
                    />
                </div>
                
                <div className="optionSet colorInputs">
                
                    <h3>Choose a color (hex): </h3>                    
                    <Input 
                        value={inputFirstButtonColor}
                        onChange={handleChangeFirstButtonColorInput.bind(this)}
                        maxLength={7}
                        placeholder="#339934"
                    />                    
                
                    <Input 
                        value={inputSecondButtonColor}
                        onChange={handleChangeSecondButtonColorInput.bind(this)}
                        maxLength={7}
                        placeholder="#cc0000"
                    />                                      
                </div>
                
                <div className="optionSet paddingInput">
                
                    <h3>padding: </h3>                    
                    <Input 
                        value={inputGeneralButtonPadding}
                        onChange={handleChangePaddingInput.bind(this)}
                        placeholder="1em"
                    />                                   
                </div>
                
                <div className="optionSet paddingInput">
                
                    <h3>font-size: </h3>                    
                    <Input 
                        value={inputGeneralFontSize}
                        onChange={handleChangeFontSizeInput.bind(this)}
                        placeholder="16px"
                    />                                   
                </div>
                
                <div className="optionSet fancyStyleCheckbox">
                
                    <label htmlFor="fancy"><h3>fancy shmancy animation: </h3></label>              
                    <Input 
                        type="checkbox"
                        id="fancy"
                        value={inputFancyStyle}
                        onChange={handleFancyChange.bind(this)}
                    />                                 
                </div>
                
                <div className="optionSet withPeepsCheckbox">
                
                    <label htmlFor="peeps"><h3>peep it up: </h3></label>                   
                    <Input 
                        type="checkbox"
                        id="peeps"
                        value={inputWithPeep}
                        onChange={handleWithPeepChange.bind(this)}
                    />                                 
                </div>
            </React.Fragment>
        );
    }
    
    function renderButtons() {
        
        return(
            <React.Fragment>
            { /* TODO: When moving mouse over the colorpicker with left button pressed there will be many many many state updates and re-rendering. Find a solution */ }
                <div className="buttonWithColorPicker">
                
                    {inputFancyStyle === false && (
                        <input type="color" 
                            value={inputFirstButtonColor}
                            onChange={handleChangeFirstButtonColorInput.bind(this)}
                        /> 
                    )}                    
                    <CustomButton 
                        buttonText={inputFirstButtonLabel} 
                        defaultButtonStyle="submit" 
                        colorHexCode={getButtonColor(inputFirstButtonColor)}
                        padding={inputGeneralButtonPadding}
                        fontSize={inputGeneralFontSize}
                        fancy={inputFancyStyle}
                        peepUrl={inputWithPeep === true ? positivePeepSvgUrl : undefined}
                    />
                </div>
                
                <div className="buttonWithColorPicker">
                
                    {inputFancyStyle === false && (
                        <input type="color" 
                            value={inputSecondButtonColor}
                            onChange={handleChangeSecondButtonColorInput.bind(this)}
                        />
                    )}  
                    <CustomButton 
                        buttonText={inputSecondButtonLabel}
                        defaultButtonStyle="cancel" 
                        colorHexCode={getButtonColor(inputSecondButtonColor)} 
                        padding={inputGeneralButtonPadding}
                        fontSize={inputGeneralFontSize}
                        fancy={inputFancyStyle}
                        peepUrl={inputWithPeep === true ? negativePeepSvgUrl : undefined}
                    />
                </div>
            </React.Fragment>
        )
    }
    
    function noop() {
        return null;
    }
    
    function renderCodeSnippets() {
        
        return(
            <React.Fragment>
                <h3>Include your Scrimbutton:</h3>                
                <textarea 
                    rows="30" 
                    cols="40" 
                    value={getButtonsSourceCode()} 
                    onChange={noop}
                /> 
            </React.Fragment>
        );
    }
    
    function getButtonsSourceCode() {
        /* TODO: find a way to just not render a property line in this literal string if the prop is undefined or a default value */
        
{/* The following bad indentation is because the indent would transfer to the displayed text */}
        return `
    <CustomButton 
        buttonText=${`"${inputFirstButtonLabel}"`} 
        defaultButtonStyle="submit" 
        colorHexCode=${getButtonColor(inputFirstButtonColor)}
        padding=${`"${inputGeneralButtonPadding}"`}
        fontSize=${`"${inputGeneralFontSize}"`}
        fancy=${`{${inputFancyStyle}}`}
        peepUrl=${inputWithPeep === true ? `"${positivePeepSvgUrl}"` : '""'}
    />
    
    <Scrimbutton 
        buttonText=${`"${inputSecondButtonLabel}"`}
        defaultButtonStyle="cancel" 
        colorHexCode=${getButtonColor(inputSecondButtonColor)} 
        padding=${`"${inputGeneralButtonPadding}"`}
        fontSize=${`"${inputGeneralFontSize}"`}
        fancy=${`{${inputFancyStyle}}`}
        peepUrl=${inputWithPeep === true ? `"${negativePeepSvgUrl}"` : '""'}
    />
        `
    }
    
    function getPaddingPropCode() {
        
        if (inputGeneralButtonPadding === undefined) {
            return '';
        }
        
        return inputGeneralButtonPadding !== undefined
                && inputGeneralButtonPadding !== '' 
                    ? `padding: ${inputGeneralButtonPadding}` 
                    : '';
    }
    
    return (
        <div className="app">   
        
            <div className="container buttonsContainer">
                {renderButtons()}
            </div>     
            
            <DropDownContainer title="Show some options... ">
                <div className="container optionsAndCodeSnippetContainer">
                    
                    <div className="container">           
                        {renderInputs()}
                    </div>
                    
                    <div className="container">
                        {renderCodeSnippets()}
                    </div>
                </div>
            </DropDownContainer>
        </div>
    )
}