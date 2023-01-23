import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpg"
import img3 from "../img/img3.jpg"
import img4 from "../img/img4.jpg"
import img5 from "../img/img5.jpg"
import img6 from "../img/img6.jpg"
import img7 from "../img/img7.jpg"
import img8 from "../img/img8.jpg"
import img9 from "../img/img9.jpg"
import img10 from "../img/img10.jpg"
import img11 from "../img/img11.jpg"
import img12 from "../img/img12.jpg"
import img13 from "../img/img13.jpg"
import img14 from "../img/img14.jpg"
import img15 from "../img/img15.jpg"
import img16 from "../img/img16.jpg"
import img17 from "../img/img17.jpg"
import img18 from "../img/img18.jpg"
import img19 from "../img/img19.jpg"
import img20 from "../img/img20.jpg"
import React from "react"
import { useEffect, useState } from "react"

function Carrousel(){

    const [image,setimage] = useState({})
    const tableau_image = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20]

    let i = 0;

    function control(){
        setimage(tableau_image[i])
        setTimeout(() => {
            if(i<tableau_image.length){
                control()
                i++
            }
            else{
                i=0
                control()
            }
        }, 5000);
    }

    useEffect(()=>{
        setimage(tableau_image[i])
        setTimeout(() => {
            i++
            control()
        }, 5000);
    },[])
    

    return(
        <>
        <div id="carrousel">
            <img className="background" src={image}></img>
            <div id="couche"></div>
        </div>
        </>
    )
}

export default Carrousel