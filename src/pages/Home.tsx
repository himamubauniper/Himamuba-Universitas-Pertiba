import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-primary font-semibold">INFORMASI TERBARU</p>

          <h2 className="text-4xl font-bold">Berita & Kegiatan</h2>

          <p className="text-base-content/60 mt-3">
            Informasi terbaru seputar kegiatan organisasi dan mahasiswa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard
            title="Kegiatan Mahasiswa HIMA UNIPER"
            description="Informasi mengenai kegiatan terbaru organisasi."
            image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
            date="18 September 2026"
            category="Kegiatan"
          />

          <NewsCard
            title="Seminar Mahasiswa"
            description="HIMA UNIPER menyelenggarakan kegiatan seminar mahasiswa."
            image="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
            date="15 September 2026"
            category="Seminar"
          />

          <NewsCard
            title="Penerimaan Anggota Baru"
            description="Informasi mengenai kegiatan organisasi mahasiswa."
            image="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            date="10 September 2026"
            category="Organisasi"
          />
        </div>
      </section>
    </>
  );
}
