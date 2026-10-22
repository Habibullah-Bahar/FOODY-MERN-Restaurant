import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import PopularMenu from "./components/Menu/PopularMenu";
import About from "./pages/About";
import Qualities from "./components/Qualities/Qualities";
import Team from "./components/Team/Team";
import Reservation from "./components/Reservation/Reservation";
import Success from "./pages/Success";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<PopularMenu />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Qualities />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/success" element={<Success />} />
        <Route path="/contact" element={<Reservation />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
