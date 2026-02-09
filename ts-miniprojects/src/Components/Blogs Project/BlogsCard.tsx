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
    <div className="bg-[#1F1A1C] text-white p-6 rounded-2xl shadow-md hover:scale-[1.02] transition-all duration-300">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-400 mt-2 [overflow-wrap:anywhere]">{description}</p>
      {author && (
        <p className="text-sm text-gray-500 mt-3">By {author}</p>
      )}
      {editable &&(
        <div className="flex gap-3 mt-4">
          <button onClick={onEdit} className="mt-4 bg-white text-black px-4 py-1 rounded-full hover:bg-gray-300">Edit</button>
          <button onClick={onDelete} className="bg-red-500 px-4 py-1 rounded-full hover:bg-red-600">Delete</button>
        </div>
      )}
    </div>
  );
};