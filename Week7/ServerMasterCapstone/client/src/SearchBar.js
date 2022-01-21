export default function SearchBar(props){
    const reset = () =>{
        document.querySelector("#gameSearch").value = ""
    }
    return(
        <div id= "search">
            <input type= "text" placeholder="Enter Your Game" id= "gameSearch"></input>
            <button onClick={() => {
                props.searchQuery(document.querySelector("#gameSearch").value)
                reset()
            }}>Search</button>
            <button onClick= {() => props.rerender()}>Reset</button>
        </div>
    )
}