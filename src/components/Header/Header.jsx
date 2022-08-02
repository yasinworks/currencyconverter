import React from 'react';
import CurrencyRate from "../CurrencyRate/CurrencyRate";
import './Header.scss';

function Header() {
    return (
        <header>
            <CurrencyRate currency='EUR'/>
            <CurrencyRate currency='USD'/>
        </header>
    );
}

export default Header;