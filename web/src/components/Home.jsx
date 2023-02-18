import { useEffect } from "react"
import { useState } from "react"


function Home() {
    const date = new Date

    const [horaire, sethoraire] = useState({
        jour: "",
        mois: "",
        annee: "",
        heure: "",
        minutes: ""
    })

    function attribute() {
        sethoraire({
            jour: date.getDate(),
            mois: date.getMonth() + 1,
            annee: date.getFullYear(),
            heure: date.getHours(),
            minutes: date.getMinutes()
        })
        setTimeout(() => {
            attribute()
        }, 5000);
    }


    useEffect(() => {
        attribute();
    }, [])

    return (<>
        <h2>@DEATHTAKER85</h2>
        <h1 id="title_home">{horaire.heure}:{horaire.minutes}<br></br><i>{horaire.jour}/{horaire.mois}/{horaire.annee}</i>
        </h1>
        <h1></h1>
    </>)
}

export default Home