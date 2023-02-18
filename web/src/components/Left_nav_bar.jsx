import { Link } from "react-router-dom"

const home = require("../img/home.png")
const doc = require("../img/doc.png")
const messagerie = require("../img/messagerie.png")
const api = require("../img/api.png")
const parametre = require("../img/parametres.png")
const threeD = require("../img/3D.png")

function Left_nav_bar(){


    return(
        <nav id="left_nav">
            <section>
            <Link to="/">
            <img src={home} className="left_icone"></img>
            </Link>
            <Link to="/workspace">
            <img src={doc} className="left_icone"></img>
            </Link>
            <Link to="/API">
            <img src={api} className="left_icone"></img>
            </Link>
            <Link to="/Messagerie">
            <img src={messagerie} className="left_icone"></img>
            </Link>
            <Link to="/Parametre">
            <img src={parametre} className="left_icone"></img>
            </Link>
            </section>
        </nav>
    )
}

export default Left_nav_bar