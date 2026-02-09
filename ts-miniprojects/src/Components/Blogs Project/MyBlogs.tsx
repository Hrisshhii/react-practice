import { useState } from "react";
import { BlogsCard } from "./BlogsCard";
import { blogs as initial,type Blog } from "./blogs-data/data";
import { BlogModal } from "./BlogModal";

export const MyBlogs=()=>{
  const [blogs,setBlogs]=useState<Blog[]>(initial);
  const [editing,setEditing]=useState<Blog|null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  };

  const handleDelete=(id:number)=>{
    setBlogs(prev=>prev.filter(b=>b.id!==id));
  }

  return (
    <>
      <div className="relative p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog)=>(
          <BlogsCard key={blog.id} title={blog.title} description={blog.description} editable onEdit={()=>openEdit(blog)} onDelete={()=>handleDelete(blog.id)}/>
        ))}
        <button onClick={openCreate} 
        className="fixed bottom-10 right-10 bg-[#b1cbe2] text-black text-3xl w-14 h-14 rounded-full shadow-lg hover:scale-110 transition">+</button>
      </div>
      <BlogModal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}
        onSave={handleSave}
        editingBlog={editing}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
      
    </>
  )
};