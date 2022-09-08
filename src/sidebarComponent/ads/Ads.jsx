import "./ads.scss";
import adsImage from "../../assets/ads.png";

export default function Ads() {
  return (
    <div className="ads sidebar-container" data-aos="zoom-in">
      <img src={adsImage} alt="" />
    </div>
  );
}
