import React,{useState} from 'react'

export default function Posts() {
    const [postData,setPostData]=useState([]);
    const fetchPosts=()=>{
        const API="https://jsonplaceholder.typicode.com/posts";
        fetch(API)
        .then(res=> res.json())
        .then(data=>{
             console.log(data)
             setPostData(data)
        })
        .catch(err=> console.log(err))
    }
  return (
    <div>
        <h2> Latest Posts</h2>
        <button onClick={fetchPosts}> Get Posts</button>
        {postData?.map(post=>
            <div key={post.id}>
                 <h4> {post.title}</h4>
                 <article> {post.body} </article>
                 <hr/>
            </div>)}
    </div>
  )
}
