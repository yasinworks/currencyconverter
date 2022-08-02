import React, {useEffect, useId} from 'react';
import './Currency.scss';

function Currency(props) {
    const {currency} = props;
    const id = useId();

    useEffect(() => {
        fetch(`https://api.exchangerate.host/convert?from=${currency}&to=UAH`)
            .then(res => res.json())
            .then(data => document.getElementById(id).textContent = data.result.toFixed(1))
    }, [])

    return (
        <div className="currency">
            <span className="currency__label">{currency}</span>
            <span className="currency__rate" id={id}>0</span>
        </div>
    );
}

export default Currency;