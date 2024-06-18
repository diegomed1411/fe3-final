import React, { Fragment, useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <div className={state.theme ? "dark" : "light"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {
          /* Deberan renderizar una Card por cada uno de ellos */
          state.favs.map((fav) => (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              username={fav.username}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Favs;
