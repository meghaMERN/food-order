import { useCallback, useEffect, useState } from "react";

async function sendhttp(url, config) {
    const response = await fetch(url, config);
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(
            resData.message || 'Something went wrong, failed to send request'
        );
    }
};

export default function usehttp(url,config) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();

    const sendrequest = useCallback(async function sendrequest() {
        setLoading(true);
        try {
            const resData = sendhttp(url,config)
            setData(resData);
        } catch (err) {
            setError(err.message)
        }
        setLoading(false);
    },[]);

    useEffect(() => {
        if(config && config.meto)
        sendrequest()
    }, [sendrequest]);

    return {
        data,
        loading,
        error,

    }
}