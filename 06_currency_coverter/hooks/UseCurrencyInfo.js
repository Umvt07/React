import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;

// bhai dekh simple hai we want to fetch currecy info so when we have fetched then we have to store it in somewhere after 
// converting it into json then how to store we cant store it in local variable so we would introduce a hook
// in this way we can get the use of hooks so that is why we made a hook of use state having no json object and const having
// data and setdata