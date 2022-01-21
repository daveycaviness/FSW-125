export default function ListData(props){
    return (
        props.gameData.map(e=>{
           return(
                <div className= 'gameBox'>
                    <h3 className= 'boxAsset'>{e.name}</h3>
                    <h4 className= 'boxAsset'>{e.developer}</h4>
                    <h5 className= 'boxAsset'>{e.publisher}</h5>
                    <h5 className= 'boxAsset'>{e.platform}</h5>
                    <h5 className= 'boxAsset'>{e.price}</h5>
                    <h6 className= 'boxAsset'>{`Skew Number: ${e._id}`}</h6>
                    <button onClick={() => props.deleteGame(e._id)}>Delete</button>
                </div>
            )

        })
    )
}