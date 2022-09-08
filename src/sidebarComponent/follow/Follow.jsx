import "./follow.scss";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialPinterest,
} from "react-icons/ti";

export default function Follow() {
  return (
    <div className="follow sidebar-container" data-aos="zoom-in">
      <div className="judul-sidebar">
        <span>Follow</span>
      </div>
      <div className="isi">
        <div
          className="social"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Facebook"
        >
          <TiSocialFacebook />
        </div>
        <div
          className="social"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Twitter"
        >
          <TiSocialTwitter />
        </div>
        <div
          className="social"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Linkedin"
        >
          <TiSocialLinkedin />
        </div>
        <div
          className="social"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Instagram"
        >
          <TiSocialInstagram />
        </div>
        <div
          className="social"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Youtube"
        >
          <TiSocialYoutube />
        </div>
        <div
          className="social"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Pinterest"
        >
          <TiSocialPinterest />
        </div>
      </div>
    </div>
  );
}
