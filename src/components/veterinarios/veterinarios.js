import React from 'react'
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
    })
}
useEffect(()=>{
    fetchVeterinarios();
}, [])
if(loading===true){
    return( <div>Loading ....</div>)
} else if (loading===false){
    return(
        <div>
            <h1>Todos los veterinarios</h1>
        </div>
    )
}

}
export default Veterinarios;