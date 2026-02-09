import { useEffect, useState } from "react";
import { BlogsCard } from "./BlogsCard";
import { loadBlogs,saveBlogs,type Blog } from "./blogs-data/data";
import { BlogModal } from "./BlogModal";
import { BlogViewModal } from "./BlogViewModal";

export const MyBlogs=()=>{
  const [blogs,setBlogs]=useState<Blog[]>(()=>loadBlogs());
  const [editing,setEditing]=useState<Blog|null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openBlog,setOpenBlog]=useState<Blog | null>(null);

  const openCreate=()=>{
    setEditing(null);
    setTitle("");
    setDescription("");
    setIsModalOpen(true);
  };

  const openEdit=(blog:Blog)=>{
    setEditing(blog);
    setTitle(blog.title);
    setDescription(blog.description);
    setIsModalOpen(true);
  };

  const handleSave=(title:string,description:string)=>{
    if(!title.trim()) return;
    if(editing){
      setBlogs(prev=>prev.map(b=>b.id===editing.id?{...b,title,description}:b));
    }else{
      const newBlog:Blog={
        id:Date.now(),
        title,
        description,
      };
      setBlogs(prev=>[newBlog,...prev])
    }
    setIsModalOpen(false);
    setTitle("");
    setDescription("");
    setEditing(null);

  };

  const handleDelete=(id:number)=>{
    setBlogs(prev=>prev.filter(b=>b.id!==id));
  }

  useEffect(()=>{
    saveBlogs(blogs);
  },[blogs]);

  useEffect(()=>{
    document.body.style.overflow=openBlog?"hidden":"auto";
    return ()=>{
      document.body.style.overflow="auto";
    };
  },[openBlog]);

  return (
    <>
      <div className="relative p-8 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {blogs.map((blog)=>(
          <BlogsCard key={blog.id} {...blog} editable onEdit={()=>openEdit(blog)} onDelete={()=>handleDelete(blog.id)} onOpen={()=>setOpenBlog(blog)}/>
        ))}
        <button onClick={openCreate} 
        className="fixed bottom-10 right-10 bg-[#b1cbe2] text-black text-3xl w-14 h-14 rounded-full shadow-lg hover:scale-110 transition cursor-pointer">+</button>
      </div>
      <BlogModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}
        onSave={handleSave}
        editingBlog={editing}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
      <BlogViewModal blog={openBlog} onClose={()=>setOpenBlog(null)}/>
    </>
  )
};