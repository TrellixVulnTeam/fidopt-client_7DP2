import React from "react";
const { useState, useEffect } = React;

const AllRequests = (props) => {
    let vetRequests = props.requests;
    let [info, setInfo] = useState({
    adoptionReason: vetRequests.adoptionReason,
    ciudad: vetRequests.ciudad,
    motiveForVisit: vetRequests.motiveForVisit,
    });
    let [status, setStatus] = useState({
      status: vetRequests.status,
    })
  // let accepted = "Aceptada";
  // let rejected = "Rechazada";


  return (
    <div className="py-8 w-full">
      <div className="flex flex-row w-full">
        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
          <div className="flex items-center border-b border-gray-200 pb-6">
            <div className="flex items-start justify-between w-full">
              <div className="pl-3 w-full">
                <p className="text-xl font-medium leading-5 text-gray-800">
                  Request
                </p>
              </div>
    
            </div>
          </div>
          <div className="px-2">
            <p className="text-sm leading-5 py-4 text-gray-600">
             Información sobre el request: {info.adoptionReason} {info.motiveForVisit}
            </p>
            <p className="text-sm leading-5 py-4 text-gray-600">
             Ciudad: {info.ciudad}
            </p>
            {status.status = null || "rejected" ? <div className="flex">
              <button className="py-2 px-4 text-xs leading-3 text-white rounded-full bg-green-500" value="accepted" onClick={e=> setStatus({status: e.target.value})}>
                Aceptar
              </button>
              <button className="py-2 px-4 mx-2 text-xs leading-3 text-white rounded-full bg-red-500" value="rejected" onClick={e=>setStatus({status: e.target.value})}> 
                Rechazar
              </button>
            </div> : <div></div>}
           
          </div>
        </div>
        
      </div>
      
    </div>
  )
}
export default AllRequests;
