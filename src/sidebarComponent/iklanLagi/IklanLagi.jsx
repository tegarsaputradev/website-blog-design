import iklan from "../../assets/iklanlagi.png";
export default function IklanLagi() {
  return (
    <div className="iklanLagi sidebar-container" data-aos="zoom-in">
      <div className="judul-sidebar">
        <span>Iklan Lagi</span>
      </div>
      <div className="isi">
        <img src={iklan} alt="" />
      </div>
    </div>
  );
}
