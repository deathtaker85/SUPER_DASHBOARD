import add from "../img/croix.png"
import React from "react" 
import exit from "../img/exit.png"
import {Line} from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables);

class Arduino extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            items:[],
            project_Name:"",
            date_creation:"",
            card_type:"",
            arduino_code:"",
            ip_address:"",
            description:""
        }

        this.handlechange = this.handlechange.bind(this)
        this.handlechange1 = this.handlechange1.bind(this)
        this.handlechange2 = this.handlechange2.bind(this)
        this.handlechange3 = this.handlechange3.bind(this)
        this.handlechange4 = this.handlechange4.bind(this)
        this.handlechange5 = this.handlechange5.bind(this)
        this.open_bloc = this.open_bloc.bind(this,this,this,this);
        this.close = this.close.bind(this)
        this.save = this.save.bind(this)
        this.modifier = this.modifier.bind(this);
        this.exit = this.exit.bind(this);
        this.openitem = this.openitem.bind(this)
    }

    exit(){
        var bloc = document.getElementById("modification");
        bloc.style.visibility = "hidden";
    }

    openitem(_projectName,date,typeCard,description,code){
        this.setState({
            project_Name:_projectName,
            date_creation:date,
            card_type:typeCard,
            arduino_code:code,
            description:description
        })

        document.getElementById("openitem").style.display = "flex";
    }

    modifier(){

        fetch(this.props.API_link+"/update/"+this.state.id+"/"+this.state.location+"/"+this.state.personinhouse+"/"+this.state.housesize)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
            });
        })
    
        fetch(this.props.API_link)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    open_bloc(arg1,arg2,arg3,_id,_location,_personinshouse,_housesize){
        // document.getElementById("modification").style.visibility = "visible";
        // this.setState({location:location,personinhouse:personinhouse,housesize:housesize})
        var bloc = document.getElementById("modification");
        bloc.style.visibility = "visible";
        this.setState({location:_location,personinhouse:_personinshouse,housesize:_housesize,id:_id});
    }

    close = ()=>{
        document.getElementById("encapsuleur").style.display = "none";
        document.getElementById("formulaire").style.display = "none";
        document.getElementsByClassName("project_add")[0].style.display = "flex";
        for(let i = 0;i<document.getElementsByClassName("items").length;i++){
            document.getElementsByClassName("items")[i].style.display = "inline-block"
        }
        document.getElementById("exit").style.display = "none"

        fetch("http://192.168.209.210:2000/workspace/read")
            .then((res) => res.json()
                )
            .then((json) => {
                this.setState({
                    items: json,
                });
        })
    }


    save = ()=>{
        var table = [this.state.project_Name,this.state.date_creation,this.state.card_type,this.state.arduino_code,this.state.description]
        if((table[0]!="")&&(table[1]!="")&&(table[2]!="")&&(table[3]!="")&&(table[4]!="")){
            fetch("http://192.168.209.210:2000/workspace/Create/"+this.state.project_Name+"/"+this.state.card_type+"/"+this.state.arduino_code+"/"+this.state.date_creation+"/"+this.state.description).then((res)=>res.status)
            alert("insertion reussie")
        }
        else{
            for(let i = 0;i<table.length;i++){
                if(table[i]==""){
                    document.getElementsByClassName("error")[i].style.display = "inline";
                }
            }
        }
    }

    handlechange = (e)=>{
        console.log(e);
        this.setState(()=>(
            {project_Name:e.target.value}
        ))
    }

    handlechange1 = (e)=>{
        console.log(e);
        this.setState(()=>(
            {date_creation:e.target.value}
        ))
    }

    handlechange2 = (e)=>{
        console.log(e);
        this.setState(()=>(
            {card_type:e.target.value}
        ))
    }

    handlechange3 = (e)=>{
        console.log(e);
        this.setState(()=>(
            {ip_address:e.target.value}
        ))
    }

    handlechange4 = (e)=>{
        console.log(e);
        this.setState(()=>(
            {arduino_code:e.target.value}
        ))
    }

    handlechange5 = (e)=>{
        console.log(e);
        this.setState(()=>(
            {description:e.target.value}
        ))
    }


    turn_add = ()=>{
        document.getElementById("formulaire").style.display = "flex";
        document.getElementById("encapsuleur").style.display = "flex";
        document.getElementsByClassName("project_add")[0].style.display = "none";
        for(let i = 0;i<document.getElementsByClassName("items").length;i++){
            document.getElementsByClassName("items")[i].style.display = "none"
        }
        document.getElementById("exit").style.display = "inline"
    }

    componentDidMount() {
        fetch("http://192.168.209.210:2000/workspace/read")
            .then((res) => res.json()
                )
            .then((json) => {
                this.setState({
                    items: json,
                });
        })
    }

    
    render(){
        const {items} = this.state
        console.log(items);
        var donnees = ["23","24","25","37","45","50","67","80","89","68","38","14","80","89","68","38","14","80","89","68","38","14","80","89","68","38","14"];
        if(donnees.length>=20){
            for(let i =0 ;i<10;i++){
                donnees = donnees.slice(0,9);
            }
        }
        else{
            donnees.push(this.props.data)
        }
        const data = {
            labels:["23","24","25","37","45","50","67","80","89","68","38","14"],
            datasets: [
                {
                    label:"bonjour",
                    data:donnees,
                    backgroundColor: ["cyan"],
                    borderColor:"cyan"
                },
            ],
        }
        const options ={
            maintainAspectRatio: false,
        }
        

        return(<>
            <img id="exit" src={exit} onClick={this.close.bind(this)}></img>
            <div id="formulaire">
                <div id="encapsuleur">
                <form>
                    <input type="text" onChange={this.handlechange.bind()} placeholder="project name" name="project_Name"></input>
                    <p className="error">veuiller remplir le champ !</p>
                    <input type="date" onChange={this.handlechange1.bind()} placeholder="creation date" name="date_creation"></input>
                    <p className="error">veuiller remplir le champ !</p>
                    <input type="text" onChange={this.handlechange2.bind()} placeholder="type of arduino card" name="card_type"></input>
                    <p className="error">veuiller remplir le champ !</p>
                    <input type="text" onChange={this.handlechange3.bind()} placeholder="IP address to MQTT connection" name="ip_address"></input>
                    <textarea onChange={this.handlechange4.bind()} placeholder="code arduino" name="arduino_code"></textarea>
                    <p className="error">veuiller remplir le champ !</p>
                    <textarea onChange={this.handlechange5.bind()} placeholder="description du projet" name="dscription"></textarea>
                    <p className="error">veuiller remplir le champ !</p>
                    <input id="button1" type="button" onClick={this.save.bind()} value="Enregistrer"></input>
                    <input id="button2" type="button" onClick={this.handlechange.bind()} value="Enregistrer & monitorer"></input>
                </form>
                <div className="corner" id="corner1"></div>
                <div className="corner" id="corner2"></div>
                <div className="corner" id="corner3"></div>
                <div className="corner" id="corner4"></div>
                <div className="corner" id="corner5"></div>
                </div>
            </div>
            <section id="modification">
                    <input type="text" name="location" placeholder="Location" onChange={this.handlechange_bis} value={this.state.location}></input>
                    <input type="text" name="personinhouse" placeholder="Person in house" onChange={this.handlechange_bis1} value={this.state.personinhouse}></input>
                    <input type="text" name="housesize" placeholder="House size" onChange={this.handlechange_bis2} value={this.state.housesize}></input>
                    <section>
                    <button onClick={this.modifier}>modifier</button>
                    <button onClick={this.exit}>Annuler</button>
                    </section>
                </section>
            {
            items.map((item) => 
                ( 
                <div className="items">
                    <section className="project_name">
                    <h1>{ item.project_name}
                        </h1>
                    </section>
                    <section className="Descriptif">
                    <p>{ item.type_carte_arduino}
                    </p>
                    <p>{ item.date_de_creation}</p>
                    <p>{ item.date_de_creation}</p>
                    </section>
                    <section className="plus">
                        <button onClick={this.openitem.bind(item.project_name,item.project_name,item.date_de_creation,item.type_carte_arduino,item.Description,item.code_arduino)}>OUVRIR</button>
                        <button className="modifier" onClick={this.open_bloc.bind(item._id,item._id,item.location,item.personsInHouse,item.houseSize)}>MODIFIER</button>
                    </section>
                </div>
                ))
            }
            <div id="openitem">
                <section id="openitem1" >
                    <p>{this.state.project_Name}</p>
                </section>
                <section id="openitem2" >
                    <p>{this.state.date_creation}</p>
                    <p>{this.state.card_type}</p>
                    <p>{this.state.description}</p>
                </section>
                <section id="openitem3" >
                  <Line  data={data} options={options}/>
                </section>
                <section id="openitem4" >
                    <button>action1</button>
                    <button>action2</button>
                    <button>action3</button>
                    <button>action4</button>
                </section>
            </div>
            <div className="projects project_add">
                <div>
                    <img id="add" onClick={this.turn_add.bind()} src={add}></img>
                </div>
            </div>
            </>)
    }

    
}

export default Arduino