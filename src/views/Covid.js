import { useEffect,useState } from "react";
import axios from "axios";
import moment from "moment";

const Covid=()=>{
    const [dataCovid,setDataCovid]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(false);

    useEffect(()=>{
        setTimeout(async()=>{
            try {
                const res=await axios.get('https://api.covid19api.com/country/vietnam?from=2022-10-01T00:00:00Z&to=2022-11-01T00:00:00Z')
                let data=res&&res.data?res.data:[];
                if(res&&res.data){
                    data.map(item=>{
                        item.Date=moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                }
                setDataCovid(data);
                setIsLoading(false);
                setIsError(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        },2000);
    },[]);

    return(
        <>
            <h1>Covid in Vietnam</h1>
            <table id="customers">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                  </tr>
                </thead>
                <tbody>
                    {isError===false && isLoading===false && dataCovid && dataCovid.length>0 &&
                        dataCovid.map(item=>{
                            return(
                                <tr key={item.ID}>
                                    <td>{item.Date}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }
                    {isLoading===true &&
                        <tr>
                            <td colSpan='5' style={{textAlign:'center'}}>Loading...</td>
                        </tr>
                    }

                    {isError===true &&
                        <tr>
                            <td colSpan='5' style={{textAlign:'center'}}>Something wrong...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    );
}

export default Covid;