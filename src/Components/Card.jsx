import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";


const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobal();
  const [isFav, setIsFav] = useState(false);

  const addFav = () => {
    if (!isFav) {
      dispatch({ type: "ADD_FAV", payload: { id, name, username } });
    } else {
      dispatch({ type: "DELETE_FAV", payload: id });
    }
  };

  useEffect(() => {
    const encontrado = state.favs.find((fav) => fav.id === id);
    setIsFav(encontrado);
  }, [state.favs]);

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={"/dentist/" + id}>
        <img
          style={{ maxWidth: "100%" }}
          src="/images/doctor.jpg"
          alt="dentist image"
        />
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
      </Link>

      <button onClick={addFav} className="favButton">
        {isFav ? "❤️" : "🩶"}
      </button>
    </div>
  );
};

export default Card;
