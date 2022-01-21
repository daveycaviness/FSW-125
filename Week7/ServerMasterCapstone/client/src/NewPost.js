export default function NewPost(props) {
    let platforms = []

    const convertPlatform = () =>{
        const string = document.querySelector("#newPlatform").value
        const array = string.split(',')
        platforms = array
    }
    
    return(
        <div id= "newPost">
            <h3>Post your new game here.</h3>
            <input type= "text" id= "newName" className= "newGame" placeholder= "Enter Your Game Here"></input>
            <input type= "text" id= "newDeveloper" className= "newGame" placeholder= "Enter The Developer Here"></input>
            <input type= "text" id= "newPublisher" className= "newGame" placeholder= "Enter The Publisher Here"></input>
            <input type= "text" id= "newPlatform" className= "newGame" placeholder= "Enter All Platforms Seperated By Commas"></input>
            <input type= "number" id= "newPrice" className= "newGame" placeholder= "Enter The Price Here"></input>
            <label id= "newInStock" className= "newGame">Is This Game in Stock?</label>
            <select id= "newSelection" className= "newGame">
                <option value={true}>YES</option>
                <option value={false}>NO</option>
            </select>
            <button onClick={() => {
                convertPlatform()
                props.newGame({
                    name: document.querySelector("#newName").value,
                    developer: document.querySelector("#newDeveloper").value,
                    publisher: document.querySelector("#newPublisher").value,
                    platform: platforms,
                    inStock: document.querySelector("#newSelection").value,
                    price: document.querySelector("#newPrice").value
                })
            }}>Submit Game</button>
        </div>
    )
}