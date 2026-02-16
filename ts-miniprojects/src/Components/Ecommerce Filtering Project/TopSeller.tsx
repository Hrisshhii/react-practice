import { useEffect, useState } from "react"

interface Author{
  id:string;
  name:string;
  isFollowing:boolean;
  image:string;
}

interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
  login: {
    uuid: string;
  };
}

interface RandomUserResponse {
  results: RandomUser[];
}

const TopSeller = () => {
  const [authors,setAuthors]=useState<Author[]>([]);

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const response=await fetch("https://randomuser.me/api/?results=5")
        const data:RandomUserResponse=await response.json();
        const authorData:Author[]=data.results.map((user)=>({
          name:`${user.name.first} ${user.name.last}`,
          isFollowing:false,
          image:user.picture.medium,
          id:user.login.uuid,
        }))
        setAuthors(authorData);
      }catch (error){
        console.log(`Error fetching authors ${error}`);
      }
    };
    fetchData();
  },[]);

  const handleFollowClick=(id:string)=>{
    setAuthors(prev=>prev.map(author=>author.id===id?{...author,isFollowing:!author.isFollowing}:author));
  };

  return (
    <div className="rounded p-2 sm:p-6">
      <h2 className="text-2xl font-bold mb-5 text-center">Top Sellers</h2>
      <ul>
        {authors.map((author)=>(
          <li key={author.id} className="flex items-center justify-between mb-3">
            <section className="flex items-center justify-center">
              <img src={author.image} alt={author.name} className="w-[25%] h-[25%] rounded-full object-cover mr-3"/>
              <span className="text-[1.2rem]">{author.name}</span>
            </section>
            <button onClick={()=>handleFollowClick(author.id)} className={`py-3 px-4 rounded cursor-pointer ${author.isFollowing?"border-white/20 bg-black text-white/50":"bg-red-500 text-white"}`}>{author.isFollowing?"UnFollow":"Follow"}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopSeller