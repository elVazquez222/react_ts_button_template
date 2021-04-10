import React, { useState } from 'react';
import CustomButton from './CustomButton';
import Input from './Input';
import DropDownContainer from './DropDownContainer';
import './styles.css'

export default function App(): React.ReactElement {

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
    function handleChangeFirstButtonLabelInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInputFirstButtonLabel(event.target.value);
    }   
    
    function handleChangeSecondButtonLabelInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInputSecondButtonLabel(event.target.value);
    }     
    // COLOR
    function handleChangeFirstButtonColorInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInputFirstButtonColor(event.target.value);
    }
    
    function handleChangeSecondButtonColorInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInputSecondButtonColor(event.target.value);
    }
    // PADDING
    function handleChangePaddingInput(event: React.ChangeEvent<HTMLInputElement>) {
        
        if (event.target.value === '') {

            setInputGeneralButtonPadding('default');   
            return;
        }
        
        setInputGeneralButtonPadding(event.target.value);
    }
    // FONT SIZE
    function handleChangeFontSizeInput(event: React.ChangeEvent<HTMLInputElement>) {
        
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
    
    function getButtonColor(colorHexCode: string): string | undefined {
        
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
    
    function isValidColor(colorCode: string) {
        // credits: found regex on https://stackoverflow.com/questions/1636350/how-to-identify-a-given-string-is-hex-color-format
        return /^#[0-9A-F]{6}$/i.test(colorCode)
    }
    
    function renderInputs(this: React.ChangeEvent<InputEvent> | void) {
        
        return (
            <React.Fragment>
                <div className="optionSet labelInputs">
                
                    <h3>Set a label: </h3>                    
                    <Input 
                        onChange={handleChangeFirstButtonLabelInput.bind(this)}
                    />
                    
                    <Input 
                        onChange={handleChangeSecondButtonLabelInput.bind(this)}
                    />
                </div>
                
                <div className="optionSet colorInputs">
                
                    <h3>Choose a color (hex): </h3>                    
                    <Input 
                        onChange={handleChangeFirstButtonColorInput.bind(this)}
                        maxLength={7}
                        placeholder="#339934"
                    />                    
                
                    <Input 
                        onChange={handleChangeSecondButtonColorInput.bind(this)}
                        maxLength={7}
                        placeholder="#cc0000"
                    />                                      
                </div>
                
                <div className="optionSet paddingInput">
                
                    <h3>padding: </h3>                    
                    <Input 
                        onChange={handleChangePaddingInput.bind(this)}
                        placeholder="1em"
                    />                                   
                </div>
                
                <div className="optionSet paddingInput">
                
                    <h3>font-size: </h3>                    
                    <Input 
                        onChange={handleChangeFontSizeInput.bind(this)}
                        placeholder="16px"
                    />                                   
                </div>
                
                <div className="optionSet fancyStyleCheckbox">
                
                    <label htmlFor="fancy"><h3>fancy shmancy animation: </h3></label>              
                    <Input 
                        type="checkbox"
                        id="fancy"
                        onChange={handleFancyChange.bind(this)}
                    />                                 
                </div>
                
                <div className="optionSet withPeepsCheckbox">
                
                    <label htmlFor="peeps"><h3>peep it up: </h3></label>                   
                    <Input 
                        type="checkbox"
                        id="peeps"
                        onChange={handleWithPeepChange.bind(this)}
                    />                                 
                </div>
            </React.Fragment>
        );
    }
    
    function renderButtons(this: React.ChangeEvent<InputEvent> | void): React.ReactElement {
        
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
                        label={inputFirstButtonLabel} 
                        defaultButtonStyle="submit" 
                        colorHexCode={getButtonColor(inputFirstButtonColor)}
                        padding={inputGeneralButtonPadding}
                        fontSize={inputGeneralFontSize}
                        fancy={inputFancyStyle}
                        peepUrl={inputWithPeep === true ? positivePeepSvgUrl : undefined}
                        onClick={noop}
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
                        label={inputSecondButtonLabel}
                        defaultButtonStyle="cancel" 
                        colorHexCode={getButtonColor(inputSecondButtonColor)} 
                        padding={inputGeneralButtonPadding}
                        fontSize={inputGeneralFontSize}
                        fancy={inputFancyStyle}
                        peepUrl={inputWithPeep === true ? negativePeepSvgUrl : undefined}
                        onClick={noop}
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
                    rows={30}
                    cols={40} 
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