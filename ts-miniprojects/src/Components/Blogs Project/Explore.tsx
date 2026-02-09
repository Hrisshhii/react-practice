import { exploreBlogs } from "./blogs-data/exploredata";
import { BlogsCard } from "./BlogsCard";

export const Explore=()=>{
  return (
    <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {exploreBlogs.map(blog=>(
        <BlogsCard key={blog.id} title={blog.title} description={blog.description}/>
      ))}
    </div>
  );
};