import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";

export const initialState = { theme: false, dentists: [], favs: [] };

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "GET_FAVS":
      const localData = localStorage.getItem("favs")
        ? JSON.parse(localStorage.getItem("favs"))
        : [];
      return { ...state, favs: localData };
    case "ADD_FAV":
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return { ...state, favs: newFavs };
    case "DELETE_FAV":
      const filteredFavs = state.favs.filter((fav) => fav.id != action.payload);
      localStorage.setItem("favs", JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };
    case "SWICH_THEME":
      const newTheme = !state.theme;
      return { ...state, theme: newTheme };
  }
};

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url)
      .then((res) => dispatch({ type: "GET_DENTISTS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_FAVS"});
  }, []);

  useEffect(() => {
    if (state.theme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [state.theme]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
