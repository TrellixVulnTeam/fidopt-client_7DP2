import AppHeader from "../appComponents/appHeader";
import React from "react";
import { useHistory, useParams } from "react-router";
const { useState, useEffect } = React;


const MeetingRequest = (props) => {
  const params = useParams();
  let pending = "Pending";
  let { id } = params.id;
  let [info, setInfo] = useState({
    motiveForVisit: "",
    ciudad: "",
    date: "",
    status: pending,
  });
  let history = useHistory();
  
  const postMeetingRequest = async () => {
    let response = await fetch(
      `http://localhost:3000/newMeetingRequest/${id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          motiveForVisit: info.motiveForVisit,
          ciudad: info.ciudad,
          date: info.date,
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
  const redirect = ()=>{
    history.push(`/perro/${id}`)
  }
  const handleChange = (e) => {
    e.preventDefault();
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
const handleFormSubmit = async (e) =>{
  e.preventDefault();
  let meetingRequest = await postMeetingRequest();
  redirect();
}
return (
  <div>
    <AppHeader />
  </div>
)
};
export default MeetingRequest;
