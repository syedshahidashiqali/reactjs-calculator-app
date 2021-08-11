import React, { useContext } from 'react';
import Button from './Button';

import { GlobalContext } from '../context/GlobalState';



function Rows() {

    const { expression, setExpression } = useContext(GlobalContext);

    const handleClick = e => {
            setExpression(expression.concat(e.target.name));
            console.log(e.target.name)
    }

    const calculate = () => {
            setExpression(eval(expression))
        //     console.log(expression)
    }

    const cancel = () => {
            setExpression("")
    }

    const delValue = e => {
            setExpression(expression.slice(0, -1));
        //     console.log(expression)
    }
    return (
        <>
            <div className="row">
                <Button className="col blue cancel" 
                        text="C"
                        onClick={cancel} />
                <Button className="col blue"
                        onClick={delValue}
                        text="DEL" />
                <Button className="col blue text" 
                        name="/100"
                        text="%"
                        onClick={handleClick} />
                <Button className="col blue text" 
                        name="/"
                        text="/"
                        onClick={handleClick} />
            </div>
            <div className="row">
                <Button className="col text"
                        name="7"
                        text="7"
                        onClick={handleClick} />
                <Button className="col text"
                        name="8"
                        text="8" 
                        onClick={handleClick} />
                <Button className="col text"
                        name="9"
                        text="9"
                        onClick={handleClick} />
                <Button className="col text blue"
                        name="*"
                        text="X"
                        onClick={handleClick} />
            </div>
            <div className="row">
                <Button className="col text"
                        name="4"
                        text="4" 
                        onClick={handleClick} />
                <Button className="col text"
                        name="5"
                        text="5"
                        onClick={handleClick} />
                <Button className="col text"
                        name="6"
                        text="6"
                        onClick={handleClick} />
                <Button className="col text blue"
                        name="-"
                        text="-"
                        onClick={handleClick} />
            </div>
            <div className="row">
                <Button className="col text"
                        name="1"
                        text="1"
                        onClick={handleClick} />
                <Button className="col text"
                        name="2"
                        text="2"
                        onClick={handleClick} />
                <Button className="col text"
                        name="3"
                        text="3"
                        onClick={handleClick} />
                <Button className="col text blue"
                        name="+"
                        text="+"
                        onClick={handleClick} />
            </div>
            <div className="row">
                <Button className="col disabled" text="+/-" />
                <Button className="col text"
                        name="0"
                        text="0"
                        onClick={handleClick} />
                <Button className="col text"
                        name="."
                        text="."
                        onClick={handleClick} />
                <Button className="col bg-blue" text="=" 
                        onClick={calculate} />
            </div>
        </>
    )
}

export default Rows
