import UpdateItems from './UpdateItems.js'

export default function ListedItems(props){
    var count = 0
    return(
        props.data.map((e) => {
            count++
            return(
                <div className = "entryDiv">
                    <div>
                        <h1>{e.item}</h1>
                        <h3>{e.desc}</h3>
                        <h3>{`The Price Per Unit${e.ppu}`}</h3>
                    </div>
                    <button onClick = {() =>{
                        props.deleteItems(e._id)
                    }}>Delete Items</button>
                    <UpdateItems
                        id = {e._id}
                        count = {count}
                        updateItems = {props.updateItems}
                    />
                </div>
            )
        })
    )
}