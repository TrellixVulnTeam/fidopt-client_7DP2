import React from "react";
import Header from "../appComponents/header"
import Loader from "../appComponents/Loader"
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
        <Header />
        <p>Welcome {info.nombre}</p>
        <h5>Tus perros favoritos son:</h5>
        <div className="item-list clearfix align-middle">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              {info.perrosFavoritos.map((perro)=>(
            <div className="item-card" key={`perro-container-${perro._id}`}>
              <img
                src="https://via.placeholder.com/400x100/6495ED"
                alt="profile-cover"
                className="img-responsive-cover"
              ></img>
              <div className="card-info">
              <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="user" className="profile-photo-lg"></img>
              <div className="item-info"> 
              <a href="" className="pull-right text-green"></a>
                  	<h5 key={`perro-name-${perro._id}`}><a href="#" className="profile-link">{perro.nombre}</a></h5>
                  	<p key={`perro-raza-${perro._id}`}>{perro.raza}</p>
              </div>
              </div>
            </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HomeUsuario;
