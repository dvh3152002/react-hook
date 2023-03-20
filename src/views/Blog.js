import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link,useNavigate } from "react-router-dom";

const Blog=()=>{
    let newData=[];
    let navigate=useNavigate();

    const {data:dataBlogs,isLoading,isError}=useFetch(`https://jsonplaceholder.typicode.com/posts`,false);

    if(dataBlogs && dataBlogs.length>0){
        newData=dataBlogs.slice(0,9);
    }

    const handleAddNew=()=>{
        navigate('/add-new-blog');
    }

    return(
        <>
            <div>
                <button className="btn-add-new" onClick={handleAddNew}>+Add new blog</button>
            </div>
            <div className="blog-container">
                {isLoading===false && newData && newData.length>0 &&
                    newData.map((item,index)=>{
                        return(
                            <div key={index} className="single-blog">
                                <div className="title">{item.title}</div>
                                <div className="content">{item.body}</div>
                                <Link to={`/blog/${item.id}`}>View detail</Link>
                            </div>
                        )
                    })
                }
            </div>
            {isLoading===true &&
                <div>Loading data...</div>
            }
        </>
    )
}

export default Blog