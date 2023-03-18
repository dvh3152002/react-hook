import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link } from "react-router-dom";

const Blog=()=>{
    const {data:dataBlogs,isLoading,isError}=useFetch(`https://jsonplaceholder.typicode.com/posts`,false);

    let newData=[]
    if(dataBlogs && dataBlogs.length>0){
        newData=dataBlogs.slice(0,9);
        console.log('check new',newData)
    }
    return(
        <>
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