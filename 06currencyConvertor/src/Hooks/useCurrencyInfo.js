import { useState, useCallback, useEffect } from "react";

function usecurrencyConvertorInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json)
            .then((res) => setData(res[currency]))
        console.table(data);
    }, [currency])
    console.table(data)
    return data
}

export default usecurrencyConvertorInfo;