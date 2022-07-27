import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/pages/LandingPage";
import SearchPage from "./searchPage/pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route exact path="/search" element={<SearchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
