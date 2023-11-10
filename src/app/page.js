'use client'
import "./globals.css"
import { useRouter } from "next/navigation"


export default function Main() {


  const router = useRouter()
  return (

    <><div className="text-center flex items-center flex-col mt-5">
      <h1 className="mb-5 text-2xl">Blogging App</h1>

      <div className=" ">

        {/* <button className="bg-fuchsia-200  border-solid border-2 rounded-md px-2 py-2" onClick={() => { router.push('/Home') }}>Home</button> */}

        <button className="bg-fuchsia-200  border-solid border-2 rounded-md px-2 py-2"
          onClick={() => { router.push('/blogs') }}>Blogs</button>
          
      </div>
    </div></>
  )
}
