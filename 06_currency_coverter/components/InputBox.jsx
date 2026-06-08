import React,{useId} from 'react'
// useId-> it is a react hook for generating unique id that can be passed to accessibility attributes
// now yaa as we have studied in props in tailwind props lecture 3 the same way we have passed 
// multiple props and yaa we have to to insert it in box
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="USD",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
    const amountInputId=useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                       {currencyOption.map((cur)=>(
                            <option key={cur} value={cur}>{cur}</option> 
                       ))}
                       
                       /* key improves the efficiency of looping it is quite simple to thing  */
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
