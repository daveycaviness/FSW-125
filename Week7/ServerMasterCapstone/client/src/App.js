import './App.css';
import {useEffect, useState} from 'react'
import ListData from './ListData.js'
import SearchBar from './SearchBar.js';
import NewPost from './NewPost.js';
import SearchSkew from './SearchSkew.js';
import UpdateGame from './UpdateGame.js';

function App() {
  const [gameData, setGameData] = useState([])
  useEffect(() =>{
    fetch("/games")
      .then(res => res.json())
      .then(res => setGameData(res))
      .catch(error => console.log(error))
  },[])

  const searchQuery = (query) =>{
    fetch(`/games/search/name?name=${query}`)
      .then(res => res.json())
      .then(res => setGameData(res))
      .catch(error => console.log(error))
  }

  const searchSkew = (id)=>{
    fetch(`/games/${id}`)
      .then(res => res.json())
      .then(res => setGameData(res))
      .catch(error => console.log(error))
  }

  const newGame = (object)=>{
    fetch("/games", {
      method: "POST", 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    })
    rerender()
  }

  const update = (id, object)=>{
    fetch(`/games/${id}`,{
      method: "PUT", 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    })
    rerender()
  }

  const deleteGame = (id) =>{
    fetch(`/games/${id}`, {
      method: "DELETE"
    })
    rerender()
  }
  
  const rerender = () =>{
    fetch("/games")
      .then(res => res.json())
      .then(res =>setGameData(res))
      .catch(error=>console.log(error))
  }
  
  return (
    <div>
      <h1 id= "headerId">Davey's New and Used Game Store</h1>
      <div id= "mainDiv">
        <div id= "searchDiv">
          <SearchBar 
            searchQuery = {searchQuery}
            rerender = {rerender}
          />
          <SearchSkew searchSkew = {searchSkew}/>
        </div>
        <NewPost newGame = {newGame}/>
        <UpdateGame update = {update}/>
      </div>
      <main>
        <ListData 
          gameData = {gameData}
          deleteGame = {deleteGame}
        /> 
      </main>
    </div>
  );
}

export default App;
