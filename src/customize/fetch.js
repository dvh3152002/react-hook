import { useEffect,useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch=(url)=>{
    const ourRequest=axios.CancelToken.source();

    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(false);

    //componentDidMount
    useEffect(()=>{
        async function fetchData(){
            try {
                const res=await axios.get(url,{
                    cancelToken:ourRequest.token
                });

                let data=res&&res.data?res.data:[];
                if(res&&res.data){
                    data.map(item=>{
                        item.Date=moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                }
                setData(data);
                setIsLoading(false);
                setIsError(false);
            }catch (error) {
                if(axios.isCancel(error)){
                    console.log('Request cancel: ',error.message);
                }else{
                    setIsError(true);
                    setIsLoading(false);
                }
            }
        } 

        setTimeout(()=>{
            fetchData();
        },3000);

        return ()=>{
            ourRequest.cancel('Operation canceled by the user');
        }
    },[]);

    return {
        data,isLoading,isError
    }
}

export default useFetch;