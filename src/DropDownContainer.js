import React, { useState } from 'react';

export default function DropDownContainer(props) {
    
    const [showContent, setShowContent] = useState(false)
    
    function handleDropDownClick() {
        
        setShowContent(!showContent)
    }
    
    return(
        <div className="dropDownContainer">
            
            <h3 className="dropDownContainerTitle" onClick={handleDropDownClick.bind(this)}>            {props.title}
                <i 
                    className="fas fa-chevron-circle-down" 
                    style={{transform: showContent ? 'rotate(180deg)' : 'none'}}
                >
                </i>
            </h3>
            
            <div 
                className="dropDownContent" 
                id="dropDownContent" 
                style={{visibility: showContent ? 'visible' : 'hidden'}}
            >
                {props.children}
            </div>
        </div>
    )
}