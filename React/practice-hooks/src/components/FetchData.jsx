import React, {useState, useEffect} from 'react'

const FetchData = () => {
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState("")

    useEffect(()=>{
        async function fetchData(){
            setLoading(true)
            try {
                let response= await fetch('https://jsonplaceholder.typicode.com/posts')
                let result= await response.json()
                setData(result)
                console.log(result)
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    },[]);

    if(loading){
        return (
            <p>Loading ...</p>
        )
    }

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
