import React from "react";
import AppHeader from "../appComponents/appHeader"
import Loader from "../appComponents/Loader"
import DogListComponent from "../perros/dogList"
const { useState, useEffect } = React;

const HomeUsuario = () => {
  let [info, setInfo] = useState({
    auth: null,
    nombre: "",
    perrosFavoritos: [],
    rol: "",
  });

  const getUser = async () => {
    let responseFromGet = await fetch("http://localhost:3000/usuario", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: window.localStorage.token,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    if (responseFromGet.user !== undefined) {
      let rol = responseFromGet.user.rol;
      let username = responseFromGet.user.nombre;
      let favoriteDogs = responseFromGet.user.perrosFavoritos;
      let userInfo = {
        auth: responseFromGet.auth,
        message: responseFromGet.message,
        nombre: username,
        perrosFavoritos: favoriteDogs,
        rol: rol,
      };
      setInformation(userInfo);
    } else {
      let userInfo = {
        auth: responseFromGet.auth,
        message: responseFromGet.message,
      };
      setInformation(userInfo);
    }
  };

  const setInformation = (information) => {
    setInfo({
      auth: information.auth,
      message: information.message,
      nombre: information.nombre,
      perrosFavoritos: information.perrosFavoritos,
      rol: information.rol,
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(info);
  if (info.auth === null) {
    return (<Loader />);
  } else if (info.auth === false) {
    return (<h1>{info.message}</h1>);
  } else if (info.auth === true) {
    return (
      <div>
        <AppHeader />
        <p className="text-center text-4xl">Welcome, {info.nombre}</p>
        <h5>Tus perros favoritos son:</h5>
        <div className="item-list clearfix align-middle">
          <div className="row">
            <DogListComponent dogs={info.perrosFavoritos} />
          </div>
        </div>
      </div>
    );
  }
};

export default HomeUsuario;
