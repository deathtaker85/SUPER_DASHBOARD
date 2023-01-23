import { Link } from "react-router-dom"

const home = require("../img/home.png")
const user = require("../img/user.png")

function Left_nav_bar(){


    return(
        <nav id="left_nav">
            <section>
            <Link to="/home">
            <img src={home} className="left_icone"></img>
            </Link>
            <Link to="/workspace">
            <img src={user} className="left_icone"></img>
            </Link>
            </section>
        </nav>
    )
}

export default Left_nav_bar