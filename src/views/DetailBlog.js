import { useParams,useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";

const DetailBlog=()=>{
    let {id}=useParams();
    let navigate = useNavigate();
    const {data:dataBlogDetail,isLoading,isError}=useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`,false);

    const handleBackDetailBlog=()=>{
        navigate("/blog");
    }
    return(
        <>
            <div><span onClick={()=>handleBackDetailBlog()}>&lt;-- Back</span></div>
            <div className="data-blog">
                {dataBlogDetail && 
                    <>
                        <div className="title">Id:{dataBlogDetail.id} --- {isLoading===true ? 'Loading data':dataBlogDetail.title}</div>
                        <div className="content">{dataBlogDetail.body}</div>
                    </>
                }
            </div>
        </>
    )
}

export default DetailBlog;