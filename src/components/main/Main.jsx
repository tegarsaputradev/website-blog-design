import "./main.scss";
import Hero from "../hero/Hero";
import Potensi from "../potensi/Potensi";
import Populer from "../s_populer/Populer";
import Home from "../../pages/home/Home";
export default function Main() {
  return (
    <div className="main col-lg-9">
      <Hero />
      <Potensi />
      <Home />
      <Populer />
    </div>
  );
}
