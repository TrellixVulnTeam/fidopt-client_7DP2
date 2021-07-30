import React from "react";
import AppHeader from "../appComponents/appHeader"
import DogListComponent from "./dogList";
import Loader from "../appComponents/Loader"
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
    return (<Loader />);
  } else if (info.cargando === false) {
    return (
      <div>
        <AppHeader />
        <div className="all-dog-container col-md-4 col-sm-6">
          <DogListComponent dogs={info.perros} />
        </div>
      </div>
    );
  }
};
export default Perros;
