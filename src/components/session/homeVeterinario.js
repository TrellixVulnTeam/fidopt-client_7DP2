import React from "react";
import AppHeader from "../appComponents/appHeader";
import DogListComponent from "../perros/dogList";
import { Link } from "react-router-dom";
import Loader from "../appComponents/Loader";
import AllRequests from "../appComponents/Requests"
const { useState, useEffect } = React;

const HomeVeterinario = () => {
  let [info, setInfo] = useState({
    auth: null,
    nombre: "",
    perros: [],
    Requests: [],
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
      let requestsVet = responseFromGet.user.Requests;
      let userInfo = {
        auth: responseFromGet.auth,
        message: responseFromGet.message,
        nombre: username,
        perros: perrosVet,
        rol: rol,
        Requests: requestsVet,
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
      perros: information.perros,
      rol: information.rol,
      Requests: information.Requests,
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  if (info.auth === null) {
    return <Loader />;
  } else if (info.auth === false) {
    return <h1>{info.message}</h1>;
  } else if (info.auth === true) {
    return (
      <div>
        <AppHeader />
        <div className="w-full bg-gray-200 dark:bg-gray-900">
          <div className="px-20">
            <div className="w-full">
              <h2 className="text-gray-800 text-center dark:text-gray-100 text-xl font-medium mb-1">
                Welcome, {info.nombre} !
              </h2>
              <Link
                className="bg-indigo-500 active:bg-indigo-600 hover:bg-indigo-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none px-50 focus:outline-none sm:mr-2 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                to="/nuevoPerro"
              >
                Agregar nuevo Perro
              </Link>
              <h5>Tus perros son:</h5>
              <DogListComponent dogs={info.perros} />
              <h5>Tus requests son :</h5>
              <AllRequests requests={info.Requests}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HomeVeterinario;
