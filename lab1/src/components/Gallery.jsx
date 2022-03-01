
function Gallery(props){
    return(
        
        <div className="tarjeta">
            <img src={props.imagen} alt="pic"></img>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}
export default Gallery;