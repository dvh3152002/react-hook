import { useParams,useNavigate } from "react-router-dom";

const DetailBlog=()=>{
    let {id}=useParams();
    let navigate = useNavigate();

    const handleBackDetailBlog=()=>{
        navigate("/blog");
    }

    return(
        <>
            <div><span onClick={()=>handleBackDetailBlog()}>&lt;-- Back</span></div>
            <div>detail {id}</div>
        </>
    )
}

export default DetailBlog;