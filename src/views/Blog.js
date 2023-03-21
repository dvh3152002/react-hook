import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";

const Blog=()=>{
    const [show, setShow] = useState(false);
    const [newData,setNewData]=useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {data:dataBlogs,isLoading,isError}=useFetch(`https://jsonplaceholder.typicode.com/posts`,false);

    useEffect(()=>{
        if(dataBlogs && dataBlogs.length>0){
            let data=dataBlogs.slice(0,9);
            setNewData(data)
        }
    },[dataBlogs]);

    const handleAddNew=(blog)=>{
        let dataCopy=newData;
        dataCopy.unshift(blog);
        setShow(false);
        setNewData(dataCopy);
    }

    const deleteBlog=(id)=>{
        let data=newData;
        data=data.filter(item=>item.id!==id);
        setNewData(data);
    }

    return(
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                +Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog 
                        handleAddNew={handleAddNew}
                    />
                </Modal.Body>
            </Modal>
            <div className="blog-container">
                {isLoading===false && newData && newData.length>0 &&
                    newData.map((item,index)=>{
                        return(
                            <div key={index} className="single-blog">
                                <div className="title">
                                    <span>{item.title} </span>
                                    <span onClick={()=>deleteBlog(item.id)}>x</span>
                                </div>
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