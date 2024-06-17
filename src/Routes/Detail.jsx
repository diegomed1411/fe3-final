import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import axios from "axios";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { state } = useContextGlobal();
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const DETAIL_URL = "https://jsonplaceholder.typicode.com/users/"+params.id;

  useEffect(() => {
    axios(DETAIL_URL)
      .then((res) => {
          setDentist(res.data);        
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Detail Dentist {dentist.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {dentist.id ? (

          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Sitio web</th>
              </tr>
            </thead>
            <tbody> 
              <tr></tr>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>

      ) : (
        <p>Cargando</p>
      )}
    </>
  )
}

export default Detail