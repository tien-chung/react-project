import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import AllVacationsPage from "./pages/AllVacations";
import NewVacationPage from "./pages/NewVacation";
import FavoritesPage from "./pages/Favorites";
// import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  //localhost: PORT/favorites

  return (
    <Layout>
      <div>
        {/* <MainNavigation></MainNavigation> */}
        <Routes>
          <Route path="/" element={<AllVacationsPage />} />
          <Route path="/new-vacation" element={<NewVacationPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
