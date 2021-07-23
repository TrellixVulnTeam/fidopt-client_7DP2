// LEFT TO DO 
// 1 - CREATE SINGLE USER COMPONENT 
// 2 - CREATE ENTIRE USER LIST COMPONENT
// 3 - USE RANDOMUSER.ME API TO FETCH RANDOM PROFILE IMAGES FOR USERS
// 4 - CREATE FUNCTION TO ASSIGN RANDOM NUMBER BETWEEN 10 - 99 FOR USERID PICTURE

import React from "react";
const { useState, useEffect } = React;

const Usuarios = () => {
  let [info, setInfo] = useState({
    nombre: "",
    ciudad: "",
    razasFavoritas: "",
    edad: "",
    cargando: true,
  });

  let loading = info.cargando;
  const fetchUsuarios = async () => {
    let url = "http://localhost:3000/perros";
    let response = await fetch(url).then((response) => response.json());
    setInformation(response);
  };
  const setInformation = (information) => {
    setInfo({
      nombre: information.nombre,
      ciudad: information.ciudad,
      razasFavoritas: information.razasFavoritas,
      edad: information.edad,
    });
  };

  const randomNumber = (min,max)=>{
      min = Math.ceil(min)
      max = Math.ceil(max)
      return Math.floor(Math.random()* (max, min +1)) + min
  }
  useEffect(() => {
    fetchUsuarios();
  }, []);
  if (loading === true) {
    return <div>Loading ...</div>;
  } else if (loading === false) {
    return (
      <div>
        <h1>Todos los usuarios</h1>
        <div className="container mt-5 d-flex justify-content-center">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <div className="image">
                <img
                  src={`https://randomuser.me/api/portraits/men/${randomNumber(10,99)}.jpg`}
                  className="rounded"
                  width="155"
                  alt=""
                />
              </div>
              <div className="ml-3 w-100">
                <h4 className="mb-0 mt-0">Alex Morrision</h4>
                <span>Senior Journalist</span>
                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                  <div className="d-flex flex-column">
                    <span className="articles">Articles</span>
                    <span className="number1">38</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="followers">Followers</span>
                    <span className="number2">980</span>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="rating">Rating</span>
                    <span className="number3">8.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Usuarios;
