export interface NewsItem {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Kegiatan Mahasiswa HIMA UNIPER",
    description: "Informasi mengenai kegiatan terbaru HIMA UNIPER.",
    content:
      "HIMA UNIPER melaksanakan kegiatan mahasiswa sebagai bagian dari pengembangan organisasi, kebersamaan, dan pengalaman mahasiswa.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    date: "18 September 2026",
    category: "Kegiatan",
  },
  {
    id: 2,
    title: "Seminar Mahasiswa",
    description: "HIMA UNIPER menyelenggarakan kegiatan seminar mahasiswa.",
    content:
      "Seminar mahasiswa menjadi salah satu kegiatan untuk meningkatkan wawasan, pengetahuan, dan kemampuan mahasiswa.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    date: "15 September 2026",
    category: "Seminar",
  },
  {
    id: 3,
    title: "Penerimaan Anggota Baru",
    description: "Informasi mengenai penerimaan anggota baru organisasi.",
    content:
      "HIMA UNIPER membuka kesempatan bagi mahasiswa untuk bergabung dan berkontribusi dalam kegiatan organisasi.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    date: "10 September 2026",
    category: "Organisasi",
  },
];
