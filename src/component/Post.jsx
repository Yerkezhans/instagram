import { useState } from "react";
import Comment from "./Comment";

function Post ({post, setPosts}){
    const userId = localStorage.getItem("userId")
    
    function toggleLike(postId){
        setPosts(prev=>
            prev.map(p=>{
            if (p.id===postId){
            return {
                ...p,
                isLiked: p.likes.find(v => v === userId) ? true : false,
                likes: p.likes.find(v => v === userId) ? [...p.likes.filter(v=> v!=userId)] : [...p.likes, userId], 
                isDisliked:false,
                dislikes: p.isDisliked ? p.dislikesCount -1 : p.dislikesCount 
            }}
            return p
        }))
    }

    return(
        <div className="post">
            <h3>{post.username}</h3>
            <img src={post.image} alt="post"/>

            <button onClick={()=>toggleLike(post.id)}>
              {post.likes.find(u => u === userId) ? "❤️" : "💔"}   {post.likes.length}
            </button>
        <   Comment key={post.id} post={post} setPosts={setPosts}/>
        </div>
    )
}

export default Post;





