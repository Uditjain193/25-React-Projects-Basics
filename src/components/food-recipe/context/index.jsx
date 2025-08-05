import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setloading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setloading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setloading(false);
        setSearchParam("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      setloading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorite(getcurrentitem) {
    const cpyfavoriteslist = [...favoritesList];
    const index = cpyfavoriteslist.findIndex(
      (item) => item.id === getcurrentitem.id
    );
    if (index === -1) {
      cpyfavoriteslist.push(getcurrentitem);
    } else {
      cpyfavoriteslist.splice(index, 1);
    }
    setFavoritesList(cpyfavoriteslist);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleAddToFavorite,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
 