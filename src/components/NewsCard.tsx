interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

export default function NewsCard({
  title,
  description,
  image,
  date,
  category,
}: NewsCardProps) {
  return (
    <article className="card bg-base-100 shadow-md">
      <figure>
        <img src={image} alt={title} className="h-52 w-full object-cover" />
      </figure>

      <div className="card-body">
        <div className="flex gap-2">
          <div className="badge badge-primary">{category}</div>

          <span className="text-base-content/60 text-sm">{date}</span>
        </div>

        <h2 className="card-title">{title}</h2>

        <p>{description}</p>

        <div className="card-actions justify-end">
          <a href="/berita" className="btn btn-primary btn-sm">
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </article>
  );
}
