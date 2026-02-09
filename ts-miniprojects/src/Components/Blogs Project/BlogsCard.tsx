type BlogCardProps={
  title:string;
  description:string;
  author?:string;
  editable?:boolean;
  onEdit?:()=>void;
  onDelete?:()=>void;
};

export const BlogsCard=({title,description,author,editable,onEdit,onDelete}:BlogCardProps)=>{
  return(
    <div className="group bg-[#16181C] text-[#b1cbe2] p-6 rounded-2xl hover:border-white/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1">
      <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
      <p className="text-gray-300 leading-relaxed mt-2 [overflow-wrap:anywhere]">{description}</p>
      {author && (
        <p className="text-sm text-gray-500 mt-3">By {author}</p>
      )}
      {editable &&(
        <div className="flex gap-3 mt-4 justify-end">
          <button onClick={onEdit} className="px-6 py-3 bg-[#b1cbe2] cursor-pointer rounded-full text-blackrounded-full hover:bg-[#b1cbe2]/50 border-none">Edit</button>
          <button onClick={onDelete} className="bg-red-500 px-6 py-3 rounded-full hover:bg-red-600 cursor-pointer border-none text-white">Delete</button>
        </div>
      )}
    </div>
  );
};