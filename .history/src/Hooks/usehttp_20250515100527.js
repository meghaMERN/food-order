async function sendhttp(url,config){
    const response = await fetch (url,config);
    const resData = await response.json()
}


export default function usehttp(){

}