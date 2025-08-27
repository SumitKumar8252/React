import React, {useState, useEffect} from 'react'

const FetchData = () => {
    const [data, setData]= useState([])

    useEffect(()=>{
        async function fetchData(){
            let response= await fetch('https://jsonplaceholder.typicode.com/posts')
            let data= await response.json()
            setData(data)
            console.log(data)
        }

        fetchData()
    },[])

  return (
    <>
        <h1>Posts</h1>
        {data.slice(0, 5).map((post, index)=>(
            <p key={post.id}>{index+1}. {post.title}</p>
        ))}
    </>
  )
}

export default FetchData;
