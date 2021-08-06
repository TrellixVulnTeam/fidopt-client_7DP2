import React from 'react'
import Loader from "../appComponents/Loader"
import AppHeader from "../appComponents/appHeader"
import VeterinariosComponent from "./veterinariosList"
const {useState, useEffect}=React;

const Veterinarios = () => {
    let [info, setInfo] =useState({
        veterinarios: [],
        cargando: true,
    })
let loading = info.cargando;
const fetchVeterinarios = async ()=>{
    let url = "http://localhost:3000/veterinarios";
    let response = await fetch(url).then((response)=> response.json());
    setInformation(response)
}

const setInformation = (information) => {
    console.log(information)
    setInfo({
       veterinarios: information,
        cargando: false
    })
}
useEffect(()=>{
    fetchVeterinarios();
}, [])
if(loading===true){
    return (<Loader />);
} else if (loading===false){
    return(
        <div>
            <AppHeader />
            <VeterinariosComponent vets={info.veterinarios}/>
        </div>
    )
}

}
export default Veterinarios;