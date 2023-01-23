import Home from "./Home"

function Sous_container(props){
    return(
        <>
            <div id="sous_container">
            <div id="couche">
                {props.composant}
            </div>
            </div>
        </>
    )
}

export default Sous_container