import { MessageCircle, ThumbsUp } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  author: string;
  likes: number;
  comments: number;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How I Structured a Scalable Next.js App",
    author: "Alex Carter",
    likes: 342,
    comments: 48,
  },
  {
    id: 2,
    title: "Designing Clean UI with Tailwind CSS",
    author: "Maya Thompson",
    likes: 289,
    comments: 36,
  },
  {
    id: 3,
    title: "State Management Patterns in React",
    author: "Daniel Lee",
    likes: 410,
    comments: 67,
  },
  {
    id: 4,
    title: "Optimizing Frontend Performance in 2026",
    author: "Sophia Martinez",
    likes: 521,
    comments: 82,
  },
  {
    id: 5,
    title: "Building Production-Ready APIs with Node.js",
    author: "James Wilson",
    likes: 378,
    comments: 54,
  },
];

const Blogs = () => {
  return (
    <div className="mt-3 px-0 sm:p-3">
      <h2 className="text-2xl font-bold mb-5 text-center">Popular Blogs</h2>
      <ul className="space-y-1 list-none">
        {blogs.map((blog) => (
          <li key={blog.id} className="bg-[#1A1C1E] p-1 pl-3 rounded-lg hover:bg-[#222529] transition-all duration-200 cursor-pointer">
            <h3 className="text-[1rem] font-semibold">
              {blog.title}
            </h3>

            <p className="text-[0.8rem] text-white/50">
              Published by {blog.author}
            </p>

            <div className="flex items-center gap-5 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <ThumbsUp size={16} />
                <span>{blog.likes}</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <span>{blog.comments}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs