import { useEffect,useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch=(url)=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(false);

    //componentDidMount
    useEffect(()=>{
        try {
            async function fetchData(){
                const res=await axios.get(url);
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
            }
            fetchData();
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    },[]);

    return {
        data,isLoading,isError
    }
}

export default useFetch;