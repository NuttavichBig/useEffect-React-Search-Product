import { useEffect, useState } from "react"

export default function ProductList({searchText}){
    const [productList,setProductList] = useState([])
    const [page,setPage] = useState(1)
    useEffect(()=>{
        const token = setTimeout(async()=>{if(searchText != ''){
        await fetch(`https://dummyjson.com/products/search?q=${searchText}`)
        .then(resp=>resp.json()).then(data=>setProductList(data.products))
        }
        else{
        await fetch(`https://dummyjson.com/products?limit=0`)
        .then(resp=>resp.json()).then(data=>setProductList(data.products))
        }
        setPage(1)
        },500)
        return(()=>{
            clearTimeout(token)
        })
    },[searchText])

    function hdlPageChance(a){
        if((a== -1 && page == 1) || (a==1 && page > Math.floor(productList.length/10)))return
        setPage(page+a)
    }
    return(
        <>
        <div className="flex gap-4">
            <button className="bg-gray-300 border border-black" onClick={()=>hdlPageChance(-1)}>Prev</button>
            <p>{page}</p>
            <button className="bg-gray-300 border border-black" onClick={()=>hdlPageChance(1)}>Next</button></div>
        <div>
        {productList.slice((page-1)*10,((page-1)*10)+10).map(el=><li>{el.title} | {el.category} | ${el.price}</li>)}
        </div>
        </>
    )
}