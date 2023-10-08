import {useEffect, useState} from "react";
import {get_prices} from "../app/api/protected.api.js";

const usePrices = () => {
    const [prices, setPrices] = useState(0);
    const [price_loading, setPriceLoading] = useState(true);

    useEffect(() => {
        getPrice()
    }, [])

    function getPrice() {
        setPriceLoading(true)
        get_prices().then(r => {
            if (r.status === 200) {
                setPrices(r.data)
            }
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            setPriceLoading(false)
        })
    }

    return {
        prices,
        price_loading
    }
};

export default usePrices;
