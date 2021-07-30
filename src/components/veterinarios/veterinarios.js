import React from 'react'
import Loader from "../appComponents/Loader"
const {useState, useEffect}=React;

const Veterinarios = () => {
    let [info, setInfo] =useState({
        nombre: "",
        ciudad: "",
        edad: "",
        perros: [],
        cargando: true,
    })
let loading = info.cargando;
const fetchVeterinarios = async ()=>{
    let url = "http://localhost:3000/veterinarios";
    let response = await fetch(url).then((response)=> response.json());
    setInformation(response)
}

const setInformation = (information) => {
    setInfo({
        nombre: information.nombre,
        ciudad: information.ciudad,
        edad: information.edad,
        perros: information.perros,
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
            <h1>Todos los veterinarios</h1>
        </div>
    )
}

}
export default Veterinarios;