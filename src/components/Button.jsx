import React from 'react';

function Button(props) {

    const {className, name, onClick, text, accessKey} = props;
    // console.log(props)
    return (
        <div>
            <button className={className} 
                    onClick={onClick}
                    name={name}>
                
                {text}
                    
            </button>
        </div>
    )
}

export default Button
