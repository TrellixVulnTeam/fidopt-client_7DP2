import React from "react";
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
      <div className="container-fluid">
        <p>Welcome {info.nombre}</p>
        <h5>Tus perros son:</h5>
        <div className="item-list clearfix align-middle">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              {info.perros.map((perro)=>(             
            <div className="item-card" key={`perro-container-${perro._id}`}>
              <img
                src="https://via.placeholder.com/400x100/6495ED"
                alt="profile-cover"
                className="img-responsive-cover"
              ></img>
              <div className="card-info">
              <img src={`https://source.unsplash.com/80x80?${perro.raza}`} alt="user" className="profile-photo-lg"></img>
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

export default HomeVeterinario;

