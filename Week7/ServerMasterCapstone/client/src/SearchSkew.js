export default function SearchSkew(props){
    return(
        <div>
            <input type="text" id= "skew" placeholder="Enter Skew Number"></input>
            <button onClick={()=> props.searchSkew(document.querySelector("#skew").value)}>Search Skew</button>
        </div>
    )
}