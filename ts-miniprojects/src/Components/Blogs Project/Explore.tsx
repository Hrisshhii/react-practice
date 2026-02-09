import { useState } from "react";
import { exploreBlogs } from "./blogs-data/exploredata";
import { BlogsCard } from "./BlogsCard";
import type { Blog } from "./blogs-data/data";
import { BlogViewModal } from "./BlogViewModal";

type ExploreProps = {
  search: string;
};

export const Explore=({search}:ExploreProps)=>{
  const [openBlog,setOpenBlog]=useState<Blog|null>(null);
  const trending=exploreBlogs.filter(b=>b.trending);
  const filtered=exploreBlogs.filter(blog=>
    blog.title.toLowerCase().includes(search.toLowerCase())
  )
  const isSearching = search.trim().length > 0;
  return (
    <div className="font-mono">
      {isSearching?(
        filtered.length>0?(
          <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map(blog=>(
              <BlogsCard key={blog.id} {...blog} onOpen={()=>setOpenBlog(blog)}/>
            ))}
          </div>
        ):(
          <p className="text-gray-400 text-center mt-20 text-5xl">No blogs found!!</p>
        )
      ):(
        <>
          <h2 className="text-5xl font-semibold px-8 pt-6 text-[#b1cbe2] text-center">
            🔥 Trending Now
          </h2>
          <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trending.map(blog=>(
              <BlogsCard key={blog.id} {...blog} onOpen={()=>setOpenBlog(blog)}/>
            ))}
          </div>
          <h2 className="text-5xl font-semibold px-8 pt-6 text-[#b1cbe2] text-center">
            🧭 Explore Blogs
          </h2>
          <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exploreBlogs.map(blog=>(
              <BlogsCard key={blog.id} {...blog} onOpen={()=>setOpenBlog(blog)}/>
            ))}
          </div>
        </>
      )}
      <BlogViewModal blog={openBlog} onClose={()=>setOpenBlog(null)}/>
    </div>
  );
};