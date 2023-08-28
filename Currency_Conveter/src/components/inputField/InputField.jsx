import React from 'react';

const InputField = ({ amount, onSetAmount,
    toCur,onSetToCur,fromCur,onSetfromCur,converted,isLoading}) => {
    return (
        <div>
            <input type="text" value={amount} onChange={(e)=>{
                onSetAmount(Number(e.target.value));
            }} disabled={isLoading}/>
            <select value={fromCur} onChange={(e)=>{
                onSetfromCur(e.target.value);
            }} disabled={isLoading}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="AUD">AUD</option>
            </select>
            <select value={toCur} onChange={(e)=>{
                onSetToCur(e.target.value);
            }} disabled={isLoading}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="AUD">AUD</option>
            </select>

            <p>
                {converted} {toCur}
            </p>
        </div>
    );
};

export default InputField;