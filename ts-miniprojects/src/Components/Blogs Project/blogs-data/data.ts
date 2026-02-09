export type Blog={
  id:number;
  title:string;
  description:string;
};

const BLOG_Key="myblogs";

export const loadBlogs=():Blog[]=>{
  try{
    const data=localStorage.getItem(BLOG_Key);
    if(!data) return [];
    const parsed=JSON.parse(data);
    return Array.isArray(parsed)?parsed:[];
  }catch{
    return [];
  }
};

export const saveBlogs=(blogs:Blog[])=>{
  localStorage.setItem(BLOG_Key,JSON.stringify(blogs));
};
