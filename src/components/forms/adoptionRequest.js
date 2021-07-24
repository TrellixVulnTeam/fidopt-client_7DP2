import AppHeader from "../appComponents/appHeader";
import React from "react";
import { useHistory } from "react-router";
const { useState, useEffect, useParams } = React;

const AdoptionRequest = (props) => {
  let pending = "Pending";
  let [info, setInfo] = useState({
    adoptionReason: "",
    ciudad: "",
    status: pending,
  });

  let history = useHistory();

  const postAdoptionRequest = async () => {
    let response = await fetch(
      "http://localhost:3000/newAdoptionRequest/:idPerro",
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

  const handleChange = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
};

export default AdoptionRequest;
