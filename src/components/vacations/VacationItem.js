import { useContext } from "react";
import Card from "../ui/Card";
import styles from "./VacationItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function VacationItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={styles.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove From Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default VacationItem;
