// LEFT TO DO
// 1 - CREATE SINGLE USER COMPONENT
// 2 - CREATE ENTIRE USER LIST COMPONENT

import React from "react";
import AppHeader from "../appComponents/appHeader"
const { useState, useEffect } = React;

const Usuarios = () => {
  let [info, setInfo] = useState({
    usuarios:[],
    cargando: true,
  });

  let loading = info.cargando;
  const fetchUsuarios = async () => {
    let url = "http://localhost:3000/usuarios";
    let response = await fetch(url).then((response) => response.json());

    setInformation(response);
  };
  const setInformation = (information) => {
    setInfo({
      usuarios: information,
      cargando: false,
    })
  };

  const randomNumber = (min,max)=>{
      min = Math.ceil(min)
      max = Math.ceil(max)
      return Math.floor(Math.random()* (max, min +1)) + min
  }
  useEffect(() => {
    fetchUsuarios();
  },);
  if (loading === true) {
    return (<div>Loading ...</div>);
  } else if (loading === false) {
    return (
      <div>
        <AppHeader />
        <h1>Todos los usuarios</h1>
        <div className="container mt-5 d-flex justify-content-center">
        </div>
      </div>
    );
  }
};

export default Usuarios;
