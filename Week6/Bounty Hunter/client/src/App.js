import './App.css';
import {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import ListedItems from './ListedItems.js';
import NewItems from './NewItems.js'

function App() {
  const [items, setItems] = useState([])
  
  useEffect(() =>{
    fetch("/items")
      .then(res => res.json())
      .then(res => setItems(res))
      .catch(err => console.log(err))
  })

  const newListedItems = async() =>{
    await fetch("/items", {
      method: "POST", 
      headers: {
        "Accept": "application/json", 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item: document.querySelector("#item").value,
        desc: document.querySelector("#desc").value,
        ppu: document.querySelector("#ppu").value,
        _id: uuid()
      })
    })
  }

  const deleteItems = (id) =>{
    fetch(`/items/${id}`, {
      method: "DELETE"
    }) 
  }

  const updateItems = (id, item, desc, ppu) =>{
    fetch(`/items/${id}`, {
      method: "PUT", 
      headers: {
        "Accept": "application/json", 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item: item,
        desc: desc,
        ppu: ppu
      })
    })
  }

  return (
    <>
      <NewItems newListedItems = {newListedItems}/>
      <div id = "list">
        <ListedItems 
          data = {items}
          updateItems = {updateItems}
          deleteItems = {deleteItems}
        />
      </div>
    </>
  );
}

export default App;
