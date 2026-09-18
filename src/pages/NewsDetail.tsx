import { Link, useParams } from "react-router-dom";
import { newsData } from "../data/news";

export default function NewsDetail() {
  const { id } = useParams();

  const news = newsData.find((item) => item.id === Number(id));

  if (!news) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-4xl font-bold">Berita tidak ditemukan</h1>

        <Link to="/berita" className="btn btn-primary mt-6">
          Kembali ke Berita
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Link to="/berita" className="btn btn-ghost mb-6">
        ← Kembali
      </Link>

      <img
        src={news.image}
        alt={news.title}
        className="h-[400px] w-full rounded-2xl object-cover"
      />

      <div className="mt-8">
        <div className="flex gap-3">
          <span className="badge badge-primary">{news.category}</span>

          <span className="text-base-content/60 text-sm">{news.date}</span>
        </div>

        <h1 className="mt-4 text-4xl font-bold">{news.title}</h1>

        <p className="text-base-content/70 mt-6 text-lg leading-8">
          {news.content}
        </p>
      </div>
    </main>
  );
}
