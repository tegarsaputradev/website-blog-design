import "./category.scss";

export default function Category() {
  return (
    <div className="category sidebar-container" data-aos="fade-up-left">
      <div className="judul-sidebar">
        <span>Category</span>
      </div>
      <div className="isi">
        <button>Kuliner</button>
        <button>Pariwisata</button>
        <button>Penginapan</button>
        <button>Seputar Desa</button>
      </div>
    </div>
  );
}
