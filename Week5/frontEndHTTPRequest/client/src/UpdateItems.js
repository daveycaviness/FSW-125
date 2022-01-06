export default function UpdateItems(props){
    return(
        <div>
            <input type = "text" id = {`updateItem${props.count}`} placeholder="Enter Updated Item"></input>
            <input type = "text" id = {`updateDesc${props.count}`} placeholder="Enter Updated Description"></input>
            <input type = "number" id = {`updatePpu${props.count}`} placeholder="Enter Updated Price Per Unit"></input>
            <button onClick = {() => {
                props.updateItems(
                    props.id, 
                    document.querySelector(`#updateItem${props.count}`).value,
                    document.querySelector(`#updateDesc${props.count}`).value,
                    document.querySelector(`#updatePpu${props.count}`).value
                )
            }}>Update Data</button>
        </div>
    )
}