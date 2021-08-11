import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Header() {
    const { expression, setExpression } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
    }

    const updateValueByKey = e => {
        if (e.key === "Enter"){
            setExpression(eval(expression))
        }
    }
    return (
        <>
            <form onSubmit={onSubmit} className="input">
                <input type="text"
                       placeholder="Keyboard Calculation"
                       onChange={(e) => setExpression(e.target.value)}
                       onKeyPress={updateValueByKey}
                />
            </form>
            <div className="result blue">
                {expression}
            </div>
        </>
    )
}

export default Header;
