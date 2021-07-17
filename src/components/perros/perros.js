import React from "react";
import DogListComponent from "./dogList";
const { useState, useEffect } = React;

const Perros = () => {
  let [info, setInfo] = useState({
    perros: [],
    cargando: true,
  });

  const fetchPerros = async () => {
    let url = "http://localhost:3000/perros";
    let response = await fetch(url).then((response) => response.json());
    setInformation(response);
  };

  const setInformation = (information) => {
    setInfo({
      perros: information,
      cargando: false,
    });
  };

  useEffect(() => {
    fetchPerros();
  }, []);

  if (info.cargando === true) {
    return <div>Loading...</div>;
  } else if (info.cargando === false) {
    return (
      <div>
        <h1>Todos los perros</h1>
        <div className="all-dog-container col-md-4 col-sm-6">
          <DogListComponent dogs={info.perros} />
        </div>
      </div>
    );
  }
};
export default Perros;
