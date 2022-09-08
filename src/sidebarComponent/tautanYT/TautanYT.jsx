import "./tautanYT.scss";
import img1 from "../../assets/tautan.png";

export default function TautanYT() {
  return (
    <div className="tautan sidebar-container" data-aos="fade-left">
      <div className="judul-sidebar">Tautan youtube</div>
      <div className="isi">
        <a href="https://youtube.com">
          <img src={img1} alt="" />
        </a>
        <a href="https://youtube.com">
          <img src={img1} alt="" />
        </a>
        <a href="https://youtube.com">
          <img src={img1} alt="" />
        </a>
      </div>
    </div>
  );
}
