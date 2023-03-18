import { useParams } from "react-router-dom";

const DetailBlog=()=>{
    let {id}=useParams();
    return(
        <div>
            detail {id}
        </div>
    )
}

export default DetailBlog;