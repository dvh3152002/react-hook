import './Blog.scss';
import { useState } from 'react';

const AddNewBlog=()=>{
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');

    const addNewBlog=(event)=>{
        if(!title)  alert('empty title');
        if(!content)  alert('empty content');
    }

    return(
        <div className="add-new-container">
            <h3 className='add-new-text'>--- Add new Blog ---</h3>
            <form onSubmit={addNewBlog}>
                <div className='input-data'>
                    <label>Title:</label>
                    <input type='text' value={title} onChange={(event)=>setTitle(event.target.value)}></input>
                </div>
                <div className='input-data'>
                    <label>Content:</label>
                    <input type='text' value={content} onChange={(event)=>setContent(event.target.value)}></input>
                </div>
                {/* <button className='btn-add-new' onClick={addNewBlog}>Submit</button> */}
                <button className='btn-add-new' type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default AddNewBlog;