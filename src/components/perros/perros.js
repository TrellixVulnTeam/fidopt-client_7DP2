import React from "react";
const { useState, useEffect } = React;

const Perros = () => {
  let [info, setInfo] = useState({
    perros: [],
    cargando: true,
  });

  const fetchPerros = async () => {
    let url = "http://localhost:3000/perros";
    let response = await fetch(url).then((response) => response.json());
    let dogInfo = {
      perros: response,
    };
    setInformation(dogInfo);
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
          {info.perros.perros.map((perro) => {
            return (
              <div className="item-card" key={`perro-container-${perro._id}`}>
                <img
                  src="https://via.placeholder.com/400x100/6495ED"
                  alt="profile-cover"
                  className="img-responsive-cover"
                ></img>
                <div className="card-info">
                  <img
                    src={`https://source.unsplash.com/80x80?${perro.raza}`}
                    alt="user"
                    className="profile-photo-lg"
                  ></img>
                  <div className="item-info">
                    <a href="" className="pull-right text-green"></a>
                    <h5 key={`perro-name-${perro._id}`}>
                      <a href="#" className="profile-link">
                        {perro.nombre}
                      </a>
                    </h5>
                    <p key={`perro-raza-${perro._id}`}>{perro.raza}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Perros;
