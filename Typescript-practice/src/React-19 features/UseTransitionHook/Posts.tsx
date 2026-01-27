
const Posts = () => {
    //Generate lot of posts
    const posts=Array.from({length:100},(_,index)=>`Post ${index+1}`);
  return (
    <div>
        <h4>Posts:</h4>
        {posts.map(post=>(
            <div key={post} className="post">{post}</div>
        ))}
    </div>
  )
}

export default Posts