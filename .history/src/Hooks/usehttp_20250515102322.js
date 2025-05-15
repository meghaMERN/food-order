import { useState } from "react";

async function sendhttp(url, config) {
    const response = await fetch(url, config);
    const resData = await response.json();
    if (!response.ok) {
        throw new Error(
            resData.message || 'Something went wrong, failed to send request'
        );
    }
};

export default function usehttp() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState();

    async function sendrequest() {
        setLoading(true);
        try {
            const resData = sendhttp()
            setData(resData);
        } catch (err) {
            setError(err.message)
        }
        setLoading(false);
    }
    return{
        data,
        loading,
        error,
        sendrequest
    }
}