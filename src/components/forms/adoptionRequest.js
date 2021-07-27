import AppHeader from "../appComponents/appHeader";
import React from "react";
import { useHistory, useParams } from "react-router";
const { useState, useEffect } = React;

const AdoptionRequest = (props) => {
  const params = useParams();
  let pending = "Pending";
  let { id } = params.id;
  let [info, setInfo] = useState({
    adoptionReason: "",
    ciudad: "",
    status: pending,
  });

  let history = useHistory();

  const postAdoptionRequest = async () => {
    let response = await fetch(
      `http://localhost:3000/newAdoptionRequest/${id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adoptionReason: info.adoptionReason,
          ciudad: info.ciudad,
          status: info.status,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        return result;
      });
    return response;
  };
  const redirect = () => {
    history.push(`/perro/${id}`);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let adoptionRequest = await postAdoptionRequest();
    redirect();
  };
  return (
    <div>
      <AppHeader />
    </div>
  )
};

export default AdoptionRequest;
