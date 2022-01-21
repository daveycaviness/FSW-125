export default function UpdateGame(props){
    let platforms = []

    const convertPlatform = () =>{
        const string = document.querySelector("#updatePlatform").value
        const array = string.split(',')
        platforms = array
    }
    
    return(
        <div id= "updatePost">
            <h3>Update Your Game.</h3>
            <input type= "text" id= "updateSkew" className= "updateEnt" placeholder= "Enter Skew For Update"></input>
            <input type= "text" id= "updateName" className= "updateEnt" placeholder= "Enter Updated Game Here"></input>
            <input type= "text" id= "updateDeveloper" className= "updateEnt" placeholder= "Update The Developer Here"></input>
            <input type= "text" id= "updatePublisher" className= "updateEnt" placeholder= "Update The Publisher Here"></input>
            <input type= "text" id= "updatePlatform" className= "updateEnt" placeholder= "Update All Platforms Seperated By Commas"></input>
            <input type= "number" id= "updatePrice" className= "updateEnt" placeholder= "Update The Price Here"></input>
            <label id= "updateInStock" className= "updateEnt">Is This Game in Stock?</label>
            <select id= "updateSelection" className= "updateEnt">
                <option value={true}>YES</option>
                <option value={false}>NO</option>
            </select>
            <button onClick={() => {
                convertPlatform()
                props.update(document.querySelector("#updateSkew").value, {
                    name: document.querySelector("#updateName").value,
                    developer: document.querySelector("#updateDeveloper").value,
                    publisher: document.querySelector("#updatePublisher").value,
                    platform: platforms,
                    inStock: document.querySelector("#updateSelection").value,
                    price: document.querySelector("#updatePrice").value
                })
            }}>Submit Game</button>
        </div>
    )
}