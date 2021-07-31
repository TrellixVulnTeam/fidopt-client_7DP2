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
    meetingRequests: [],
    adoptionRequests:[],
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
      let meetingRequests=responseFromGet.user.meetingRequests;
      let adoptionRequests = responseFromGet.user.adoptionRequests;
      let userInfo = {
        auth: responseFromGet.auth,
        message: responseFromGet.message,
        nombre: username,
        perrosFavoritos: favoriteDogs,
        rol: rol,
        meetingRequests: meetingRequests,
        adoptionRequests: adoptionRequests,
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
      meetingRequests: information.meetingRequests,
      adoptionRequests:information.adoptionRequests,
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(info.adoptionRequests);
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
            <h5>Tus requests de adopcion son :</h5>
              <p>{info.adoptionRequests}, </p>
              <h5>Tus requests para conocer perros son:</h5>
              <p>{info.meetingRequests}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default HomeUsuario;
