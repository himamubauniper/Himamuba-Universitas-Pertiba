import { Link } from "react-router-dom";
import { newsData } from "../data/news";

export default function News() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="text-primary font-semibold">INFORMASI TERBARU</p>

        <h1 className="text-4xl font-bold">Berita HIMA UNIPER</h1>

        <p className="text-base-content/60 mt-3">
          Informasi terbaru seputar kegiatan dan organisasi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news) => (
          <article key={news.id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={news.image}
                alt={news.title}
                className="h-52 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <div className="flex items-center gap-2">
                <span className="badge badge-primary">{news.category}</span>

                <span className="text-base-content/60 text-sm">
                  {news.date}
                </span>
              </div>

              <h2 className="card-title">{news.title}</h2>

              <p>{news.description}</p>

              <div className="card-actions justify-end">
                <Link
                  to={`/berita/${news.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
