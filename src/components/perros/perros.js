import React from "react";
import { Link } from "react-router-dom";

const fetchPerros = async () => {
  let response = await fetch("http://localhost:3000/perros", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((result) => {
    return  result;
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(response)
  return response;
};

const Perros = () => {
  fetchPerros();
return (
    <div>
<h1>Todos los perros</h1>

    </div>
)

};
export default Perros;
