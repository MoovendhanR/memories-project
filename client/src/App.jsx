import React from "react"
import { Link } from "react-router-dom"
import AllRoutes from "./Pages/AllRoutes"
import { logo } from "./assets"

function App() {

  return (
  //   <h1 className="text-3xl font-bold underline">
  //   Hello world! moovi
  // </h1>
  <> <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
  <Link to="/">
    <img src={logo} alt="logo" className="w-28 object-contain" />
  </Link>

  <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
</header>
<main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
  <AllRoutes/>
</main>
  </>
  )
}

export default App
