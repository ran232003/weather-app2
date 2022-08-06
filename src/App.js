import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/pages/LandingPage";
import SearchPage from "./searchPage/pages/SearchPage";
import FavoritePage from "./favorites/pages/FavoritePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route exact path="/search" element={<SearchPage />}></Route>
        <Route exact path="/favorites" element={<FavoritePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
