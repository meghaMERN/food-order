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
    const [first, setfirst] = useState(second);

    async function sendrequest(){
        sendHttprequest()
    }
}