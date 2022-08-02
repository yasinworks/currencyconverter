import React, {useEffect, useState} from 'react';
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import './Converter.scss';

function Converter() {
    const API_URL = "https://api.exchangerate.host"
    const [currencyRateList, setCurrencyRateList] = useState([]);
    const [firstCurrency, setFirstCurrency] = useState('UAH');
    const [secondCurrency, setSecondCurrency] = useState('EUR');
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1);
    const [isAmountInFirstInput, setIsAmountInFirstInput] = useState(true);
    let firstAmount, secondAmount;

    if (isAmountInFirstInput) {
        firstAmount = amount;
        secondAmount = amount * exchangeRate;
    } else {
        secondAmount = amount;
        firstAmount = amount / exchangeRate;
    }

    useEffect(() => {
        fetch(`${API_URL}/latest?base=UAH`)
            .then(res => res.json())
            .then(data => {
                setCurrencyRateList([...Object.keys(data.rates)])
            })
    }, []);

    useEffect(() => {
        fetch(`${API_URL}/convert?from=${firstCurrency}&to=${secondCurrency}`)
            .then(res => res.json())
            .then(data => setExchangeRate(data.result))
    }, [firstCurrency, secondCurrency]);

    function handleFirstAmountChange(e) {
        setAmount(e.target.value);
        setIsAmountInFirstInput(true);
    }

    function handleSecondAmountChange(e) {
        setAmount(e.target.value);
        setIsAmountInFirstInput(false);
    }

    return (
        <div className="converter">
            <CurrencyInput amount={firstAmount} currencyOptions={currencyRateList} selectedCurrency={firstCurrency}
                           onChangeCurrency={e => setFirstCurrency(e.target.value)}
                           onChangeAmount={handleFirstAmountChange}/>
            <span> = </span>
            <CurrencyInput amount={secondAmount} currencyOptions={currencyRateList} selectedCurrency={secondCurrency}
                           onChangeCurrency={e => setSecondCurrency(e.target.value)}
                           onChangeAmount={handleSecondAmountChange}/>
        </div>
    );
}

export default Converter;