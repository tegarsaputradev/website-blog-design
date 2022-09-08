import "./potensi.scss";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";

function Potensi() {
  return (
    <div className="potensiContainer">
      <h2 data-aos="fade-right">Potensi Desa</h2>
      <hr />
      <div className="row">
        <div
          className="col-lg-4 col-md-6 mt-md-4 potensi"
          data-aos="fade-right"
        >
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <div className="image">
                <div className="imageSection">
                  <img className="imgPotensi" src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-8 basic">
              <span className="text-brands">Potensi Pertanian</span>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
                eligendi!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-4 potensi" data-aos="zoom-in">
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <div className="image">
                <div className="imageSection">
                  <img className="imgPotensi" src={img2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-8 basic">
              <span className="text-brands">Potensi Pertanian</span>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
                eligendi!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-4 potensi" data-aos="fade-left">
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <div className="image">
                <div className="imageSection">
                  <img className="imgPotensi" src={img3} alt="" />
                </div>
              </div>
            </div>
            <div className="col-8 basic">
              <span className="text-brands">Potensi Pertanian</span>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
                eligendi!
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 mt-md-4 potensi"
          data-aos="fade-right"
        >
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <div className="image">
                <div className="imageSection">
                  <img className="imgPotensi" src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-8 basic">
              <span className="text-brands">Potensi Pertanian</span>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
                eligendi!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-4 potensi" data-aos="zoom-in">
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <div className="image">
                <div className="imageSection">
                  <img className="imgPotensi" src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-8 basic">
              <span className="text-brands">Potensi Pertanian</span>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
                eligendi!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-md-4 potensi" data-aos="fade-left">
          <div className="row">
            <div className="col-3 d-flex justify-content-center">
              <div className="image">
                <div className="imageSection">
                  <img className="imgPotensi" src={img1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-8 basic">
              <span className="text-brands">Potensi Pertanian</span>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
                eligendi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Potensi;
