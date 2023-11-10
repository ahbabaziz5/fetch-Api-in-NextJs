
import Link from "next/link"

import getUsers from "./post";

import './blog.css'


export default async function Blog(){
  let users = await getUsers()
 
    console.log("users  ??" , users);
    return(
     <div className="blog"> <h1 className="heading">Blogs </h1>
   {
    users.map((data,i)=>{
      return(
        <Link  href={`/blogs/${data.id}`}>
        <div  className="h-12 bg-fuchsia-200 my-5">
      <h1 >{data.name}</h1>
      <p >{data.email}</p></div></Link>
    )})
   }
   
     </div>

    
     
       
    )
   
}