import "./vote.scss";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Vote() {
  return (
    <div className="vote sidebar-container" data-aos="fade-up-left">
      <div className="judul-sidebar">Polling</div>
      <div className="isi">
        <span className="pertanyaan">Apakah Website Ini Bermanfaat?</span>
        <div className="checkbox">
          <input type="radio" name="Sangat" id="1" />
          <label htmlFor="1">Sangat Bermanfaat</label>
        </div>
        <div className="checkbox">
          <input type="radio" name="Sangat" id="2" />
          <label htmlFor="2">Cukup Bermanfaat</label>
        </div>
        <div className="checkbox">
          <input type="radio" name="Sangat" id="3" />
          <label htmlFor="3">Kurang bermanfaat</label>
        </div>
        <div className="checkbox">
          <input type="radio" name="Sangat" id="4" />
          <label htmlFor="4">Tidak Bermanfaat</label>
        </div>
        <button>Kirim</button>
        <hr />
        <span className="pertanyaan">Hasil Polling</span>
        <div className="progresbar">
          <span className="hasil">Sangat bermanfaat</span>
          <ProgressBar
            completed={79}
            maxCompleted={100}
            isLabelVisible={false}
            width={"99%"}
            borderRadius={"5px"}
            height={"15px"}
            bgColor={"#0ec445"}
            labelSize={"12px"}
          />
        </div>
        <div className="progresbar">
          <span className="hasil">Cukup bermanfaat</span>
          <ProgressBar
            completed={15}
            maxCompleted={100}
            isLabelVisible={false}
            width={"99%"}
            borderRadius={"5px"}
            height={"15px"}
            bgColor={"#1ad9d6"}
            labelSize={"12px"}
          />
        </div>
        <div className="progresbar">
          <span className="hasil">Kurang bermanfaat</span>
          <ProgressBar
            completed={4}
            maxCompleted={100}
            isLabelVisible={false}
            width={"99%"}
            borderRadius={"5px"}
            height={"15px"}
            bgColor={"#fab55a"}
            labelSize={"12px"}
          />
        </div>
        <div className="progresbar">
          <span className="hasil">Tidak bermanfaat</span>
          <ProgressBar
            completed={2}
            maxCompleted={100}
            isLabelVisible={false}
            width={"99%"}
            borderRadius={"5px"}
            height={"15px"}
            bgColor={"#fa5a4b"}
            labelSize={"12px"}
          />
        </div>
      </div>
    </div>
  );
}
