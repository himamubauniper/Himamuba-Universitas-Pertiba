import { useState } from "react";
import { Link } from "react-router-dom";
import hima4 from "../pic/hima4.jpeg";
import hima18 from "../pic/hima18.jpeg";
import hima1 from "../pic/hima1.jpeg";
import hima15 from "../pic/hima15.jpeg";

const photos = [
  {
    image: hima4,
    title: "Ruang Berkarya",
    description:
      "Tempat mahasiswa mengembangkan potensi, kreativitas, dan pengalaman berorganisasi.",
  },
  {
    image: hima18,
    title: "Bersama Membangun Organisasi",
    description: "Membangun kebersamaan dan kolaborasi antar mahasiswa.",
  },
  {
    image: hima1,
    title: "Kegiatan Mahasiswa",
    description:
      "Berbagai kegiatan mahasiswa untuk menambah pengalaman dan wawasan.",
  },
  {
    image: hima15,
    title: "Generasi Aktif",
    description:
      "Mendorong mahasiswa untuk aktif berkontribusi di lingkungan kampus.",
  },
];

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState(0);

  const current = photos[activePhoto];

  return (
    <section className="bg-base-200">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
        {/* Konten */}
        <div>
          <p className="text-primary mb-3 font-semibold tracking-widest uppercase">
            HIMAMUBA UNIVERSITAS PERTIBA
          </p>

          <h1 className="text-5xl leading-tight font-bold lg:text-6xl">
            {current.title}
          </h1>

          <p className="text-base-content/70 mt-6 max-w-xl text-lg">
            {current.description}
          </p>

          <div className="mt-8 flex gap-3">
            <Link to="/berita" className="btn btn-primary">
              Lihat Berita
            </Link>

            <Link to="/tentang" className="btn btn-outline">
              Tentang Kami
            </Link>
          </div>
        </div>

        {/* Foto */}
        <div>
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={current.image}
              alt={current.title}
              className="h-[400px] w-full object-cover transition-all duration-500 lg:h-[500px]"
            />
          </div>

          {/* Thumbnail */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {photos.map((photo, index) => (
              <button
                key={photo.image}
                type="button"
                onClick={() => setActivePhoto(index)}
                className={`overflow-hidden rounded-xl ${
                  activePhoto === index
                    ? "ring-primary ring-4"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={photo.image}
                  alt={`Foto ${index + 1}`}
                  className="h-20 w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
