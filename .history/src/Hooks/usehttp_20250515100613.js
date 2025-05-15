async function sendhttp(url,config){
    const response = await fetch (url,config);
    const resData = await response.json();
    if(!response.ok){
        throw new Error(
            resData.message 
        )
    }
}


export default function usehttp(){

}