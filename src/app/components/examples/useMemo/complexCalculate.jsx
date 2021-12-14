import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run Factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = useMemo(() => ({
        value: otherState ? "primary" : "secondary"
    }), [otherState]);
    const fact = useMemo(() => runFactorial(value), [value]);
    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider/>
                <p>Value: {value}</p>
                <p>Result fact: {fact}</p>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => setValue(prevState => prevState + 10)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-secondary mx-2"
                    onClick={() => setValue(prevState => prevState - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider/>
                <button
                    className={"btn mx-2 btn-" + buttonColor.value}
                    onClick={() => setOtherState(prevState => !prevState)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
