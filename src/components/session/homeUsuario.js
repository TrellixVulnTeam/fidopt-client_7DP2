import React from "react";
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
      let rol = responseFromGet.rol;
      let username = responseFromGet.nombre;
      let favoriteDogs = responseFromGet.perrosFavoritos;
      let userInfo = {
        auth: responseFromGet.auth,
        message: responseFromGet.message,
        nombre: username,
        perrosFavoritos: favoriteDogs,
        rol: rol,
      };
      setInformation(userInfo);
      // let perros = favoriteDogs.map((perro) => {
      //   let dogObject = {
      //     id: perro._id,
      //     nombre: perro.nombre,
      //     raza: perro.raza,
      //   };
      //   return dogObject;
      // });
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
    return <div>Cargando...</div>;
  } else if (info.auth === false) {
    return <h1>{info.message}</h1>;
  } else if (info.auth === true) {
    return (
      <div>
        {console.log(info)};<p>Welcome {info.nombre}</p>
        <h5>Tus perros favoritos son:</h5>
        <table className="table table-striped table-dark">
          <tbody>
            {info.perrosFavoritos.map((perro) => {
              return (
                <tr key={`perro-container-${perro.id}`}>
                  <td key={`perro-name-${perro.id}`}>{perro.nombre}</td>
                  <td key={`perro-raza-${perro.id}`}>{perro.raza}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default HomeUsuario;
