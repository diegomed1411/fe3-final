import React from "react";
import { Link} from "react-router-dom";
import { routes } from "../Routes/routes";
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  const handleThemeChange = () => {
    dispatch({ type: "SWITCH_THEME" });
  };

  return (
    <nav className={state.theme ? "dark" : "light"}>
        <Link to={routes.home}>
         <img src="DH.ico" alt='DH-logo' />
        </Link>
        <Link to={routes.home}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.contact}>
          <h4>Contacto</h4>
        </Link>
        <Link to={routes.favs}>
          <h4>Favs</h4>
        </Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className="darkModeBox">
      <span className="darkModeIcon">☀️</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={state.theme}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="darkModeIcon">🌛</span>
      </div>

    </nav>
  );
};

export default Navbar;
