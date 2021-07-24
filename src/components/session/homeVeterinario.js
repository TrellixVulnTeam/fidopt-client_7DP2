import React from "react";
import AppHeader from "../appComponents/appHeader";
import DogListComponent from "../perros/dogList";
const { useState, useEffect } = React;

const HomeVeterinario = () => {
  let [info, setInfo] = useState({
    auth: null,
    nombre: "",
    perros: [],
    rol: "",
  });

  const getUser = async () => {
    let responseFromGet = await fetch("http://localhost:3000/veterinario", {
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
      let perrosVet = responseFromGet.user.perros;
      let userInfo = {
        auth: responseFromGet.auth,
        message: responseFromGet.message,
        nombre: username,
        perros: perrosVet,
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
    console.log(information);
    setInfo({
      auth: information.auth,
      message: information.message,
      nombre: information.nombre,
      perros: information.perros,
      rol: information.rol,
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (info.auth === null) {
    return <div>Cargando...</div>;
  } else if (info.auth === false) {
    return <h1>{info.message}</h1>;
  } else if (info.auth === true) {
    return (
      <div>
        <AppHeader />
        <div className="w-full bg-gray-200 dark:bg-gray-900">
          <div className="container mx-auto px-2 flex ">
            <div className="w-full">
              <h2 className="text-gray-800 text-center dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                Welcome, {info.nombre} !
              </h2>
              <h5>Tus perros son:</h5>
              <DogListComponent dogs={info.perros} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HomeVeterinario;
