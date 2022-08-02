import React from 'react';
import './CurrencyInput.scss';

function CurrencyInput(props) {
    const {currencyOptions, selectedCurrency, onChangeCurrency, onChangeAmount, amount} = props;
    return (
        <div className="currency-input">
            <input className="currency-input__field" type="number" value={amount} onChange={onChangeAmount}/>
            <select className="currency-input__select" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyInput;