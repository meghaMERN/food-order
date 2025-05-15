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
    const [loading, set] = useState(second)
    const [error, setError] = useState();

    async function sendrequest() {
        try {
            const resData = sendhttp()
        } catch (err) {
            setError(err.message)
        }
    }
}