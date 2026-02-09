import type { Blog } from "./blogs-data/data";

type Props={
  blog: Blog | null;
  onClose:()=>void;
};

export const BlogViewModal=({blog,onClose}:Props)=>{
  if(!blog) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/60">
      <div className="absolute inset-0 flex justify-center items-start overflow-y-auto p-10" onClick={onClose}>
        <div className="relative w-full max-w-3xl rounded-2xl p-8 bg-[#16181C]" onClick={e=>e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl bg-[#16181C] cursor-pointer">✕</button>
          {blog.trending && (
            <span className="inline-block mb-4 px-3 py-1 rounded-md bg-[#b1cbe2]/10 text-[#b1cbe2]">🔥 Trending</span>
          )}
          <h1 className="text-3xl font-semibold text-white tracking-tight">{blog.title}</h1>
          {blog.author && (
            <p className="mt-2 text-gray-400">By {blog.author}</p>
          )}
          <p className="mt-6 text-gray-300 leading-relaxed whitespace-pre-wrap">{blog.description}</p>
        </div>
      </div>
    </div>
  );
};