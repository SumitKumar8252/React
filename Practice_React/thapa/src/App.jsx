import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies]= useState([])
  const [movieName, setMoviesName]= useState("")

  async function fetchMovies(){
    try {
      const response= await fetch("https://react-movies-27d1d-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json")
      const result= await response.json()

      const moviesArray= Object.entries(result).map((id , movie)=>({id, movie}))

      setMovies(moviesArray);
    } catch (error) {
      console.log(error)
    }
  }

  async function addMovie(){
    if(!movieName) return alert("Enter a movie name")

    try {
      const response= await fetch(`https://react-movies-27d1d-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json`,{
        method:"POST",
        body: JSON.stringify({name: movieName}),
        headers:{"Content-Type":"application/json"}
      })
    } catch (error) {
      
    }
  }

  return (
    <>
      <h1>React API Example</h1>
      <button onClick={fetchMovies}>Fetch Data</button>
      <button onClick={addMovie}>Add Movie</button>
      <input type="text" placeholder="Enter movie name" value={movieName} onChange={(e)=> setMoviesName(e.target.value)} />
      <ul>
        
      </ul>
    </>
  )
}

export default App;
