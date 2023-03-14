import { useEffect,useState } from "react";
import useFetch from "../customize/fetch";

const Covid=()=>{
    const {data:dataCovid,isLoading,isError}=useFetch('https://api.covid19api.com/country/vietnam?from=2022-10-01T00:00:00Z&to=2022-11-01T00:00:00Z');
    

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