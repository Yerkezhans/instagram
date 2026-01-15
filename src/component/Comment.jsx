import { useState } from "react";

function Comment ({post, setPosts}){
const [commentText, setCommentText] = useState("")

    function addComment(postId, text){

        setPosts( prev=> prev.map(p=>{
            if (p.id === postId){
                
                return {
                ...p,
                comments:[...p.comments, {id: p.comments.length + 1, text}]
            }}
            
            return p
            })
        )

        setCommentText("")
    }

    console.log(post)

    function deleteComment(postId, commentId){
        setPosts(prev=>
        prev.map(p=>{
            if (p.id===postId){
            return {
            ...p,
            comments: p.comments.filter((comment)=>comment.id!==commentId)
            }}
        return p
    }))}

    return(
    
    <div className="post">
        <div>
            {post.comments.map((comment) => (
                <div key={comment.id}>
                    {comment.text}
                    <button onClick={() => deleteComment(post.id, comment.id)}>Удалить</button>
                </div>
            ))}
        </div>

        <input
        value={commentText}
        onChange={(e)=> setCommentText(e.target.value)}
        placeholder="Написать комментарий"
        />

        <button onClick={()=>addComment(post.id, commentText)}>
            Добавить
        </button>


    </div>
    )

}


export default Comment;


