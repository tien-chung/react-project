import { createContext, useState } from "react";

//arg is the initial value; could be an object
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteVacation) => {},
  removeFavorite: (vacationId) => {},
  itemIsFavorite: (vacationId) => {},
});

//updating the context values
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteVacation) {
    // setUserFavorites(userFavorites.concat(favoriteVacation)); will not work on the latest update
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteVacation);
    });
  }

  function removeFavoriteHandler(vacationId) {
    setUserFavorites((prevUserFavorites) => {
      // false if we want to remove
      return prevUserFavorites.filter((vacation) => vacation.id !== vacationId);
    });
  }

  function itemIsFavoriteHandler(vacationId) {
    return userFavorites.some((vacation) => vacation.id === vacationId);
  }

  //whenever this value changes, all components that's listening to this, it will also be updated
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
