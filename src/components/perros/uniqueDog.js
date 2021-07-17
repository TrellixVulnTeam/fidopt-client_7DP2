import { useState } from "react";

const SingleDogComponent = (props) => {
  let dog = props.dog;
  let [perro, setPerro] = useState({
    _id: dog._id,
    nombre: dog.nombre,
    raza: dog.raza,
    edad: dog.edad,
    castrado: dog.castrado,
    chip: dog.chip,
    vacuna_antirrabica: dog.vacuna_antirrabica,
  });
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
          <a href="#" className="pull-right text-green"></a>
          <h5 key={`perro-id-${perro._id}`}>
            <a href="#" className="profile-link">
              {perro.nombre}
            </a>
          </h5>
          <p key={`perro-raza-${perro._id}`}>{perro.raza}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleDogComponent;
