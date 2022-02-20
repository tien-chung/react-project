import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}> Vacation Places </div>

      <nav>
        <ul>
          <li>
            {/* Instead of using <a/> like normal html file, which will send a request
                  Link component from the router dom: attached a click listener, and load the components instead of sending request  */}
            <Link to="/">All Vacation Places </Link>
          </li>

          <li>
            <Link to="/new-vacation">Add New Vacation Place</Link>
          </li>

          <li>
            <Link to="/favorites">
              My Favorites
              <span className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
