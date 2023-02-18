const about = require("../img/about.png")
const user = require("../img/user.png")
const exit = require("../img/exit.png")


function Top_nav_bar(){

    return(
        <>
            <section id="top_nav">
                <section>
                <img src={user} className="left_icone"></img>
                <img src={about} className="left_icone"></img>
                <img src={exit} className="left_icone"></img>
                </section>
            </section>
            <section id="logo">
                <section className="haut"></section>
                <section className="bas"></section>
            </section>
        </>
    )
}

export default Top_nav_bar