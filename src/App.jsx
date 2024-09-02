import { useState } from "react"
import ProductList from "./ProductList"

export default function App() {
  const [searchText,setSearchText] = useState('')

  return (
    <div>
    <h1 className="text-3xl font-bold">Product Search</h1>
    <input className="border border-black" 
    type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
    <ProductList searchText={searchText}/>
    </div>
  )
}