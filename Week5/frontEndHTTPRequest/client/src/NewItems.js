export default function NewItems(props){
    const resetInput = ()=> {
        document.querySelector("#item").value = ""
        document.querySelector("#desc").value = ""
        document.querySelector("#ppu").value = ""
    }

    return(
        <div id = "newItemInputs">
            <div>
                <input type = "text" id = "item" placeholder="Please enter item"></input>
            </div>
            <div>
                <input type = "text" id = "desc" placeholder="Please enter description"></input>
            </div>
            <div>
                <input type = "text" id = "ppu" placeholder="Please enter price per unit"></input>   
            </div>
            <button onClick = { ()=>{
                props.newListedItems()
                resetInput()
            }}>Submit your Input</button>
        </div>
    )

}