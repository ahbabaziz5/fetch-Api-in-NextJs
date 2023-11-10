// "use client"
import getDetails from "../details";
import "./post.css"



export async function generateMetadata({ params }) {
  const details = await getDetails(params.id)
  return {
    title: details.name,
  }
}






export default async function BlogDetail({ params }) {
  const details = await getDetails(params.id)
  console.log("details" + details);
  console.log("params" + params.id);




return(
 <> <div className="bg-fuchsia-200 post px-5 py-5 my-5 flex items-center flex-col">
  <h1>Name : {details.name}</h1>
  <h1>Username : {details.username}</h1>
  <p>Email : {details.email}</p>
  <p>Phone : {details.phone}</p>
  <p>website : {details.website}</p>
  <p> City : {details.address.city}</p>
  <p> Address : {details.address.street}</p></div></>






 
)






}