export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-primary font-semibold tracking-widest uppercase">
          Tentang Kami
        </p>

        <h1 className="mt-3 text-4xl font-bold">HIMA UNIPER</h1>

        <p className="text-base-content/60 mt-4">
          Himpunan Mahasiswa Universitas Pertiba sebagai wadah mahasiswa untuk
          berkembang, berorganisasi, dan berkolaborasi.
        </p>
      </div>

      {/* Social Media */}
      <div className="grid gap-10 md:grid-cols-3">
        {/* Instagram */}
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center transition duration-300 hover:-translate-y-2"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" />

              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>

          <h2 className="mt-5 text-xl font-bold">Instagram</h2>

          <p className="text-base-content/60 mt-2">
            Ikuti informasi dan dokumentasi kegiatan HIMA UNIPER.
          </p>

          <span className="text-primary mt-3 inline-block font-semibold">
            Kunjungi Instagram →
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center transition duration-300 hover:-translate-y-2"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5Z" />

              <path d="M8.5 8.5c.3-.7.6-.7.9-.7.2 0 .4 0 .6.4l.8 1.5c.1.2.1.4 0 .6l-.5.6c-.1.1-.1.3 0 .5.3.6 1.2 1.5 1.8 1.8.2.1.4.1.5 0l.6-.5c.2-.1.4-.1.6 0l1.5.8c.4.2.4.4.4.6 0 .3 0 .6-.7.9-.6.3-1.5.3-2.8-.2-1.3-.5-2.4-1.5-3.3-2.4-.9-.9-1.9-2-2.4-3.3-.5-1.3-.5-2.2-.2-2.8Z" />
            </svg>
          </div>

          <h2 className="mt-5 text-xl font-bold">WhatsApp</h2>

          <p className="text-base-content/60 mt-2">
            Hubungi HIMA UNIPER untuk informasi dan keperluan organisasi.
          </p>

          <span className="text-primary mt-3 inline-block font-semibold">
            Hubungi Kami →
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:himauniper@example.com"
          className="text-center transition duration-300 hover:-translate-y-2"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />

              <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
            </svg>
          </div>

          <h2 className="mt-5 text-xl font-bold">Email</h2>

          <p className="text-base-content/60 mt-2">
            Kirim pertanyaan atau keperluan resmi kepada HIMA UNIPER.
          </p>

          <span className="text-primary mt-3 inline-block font-semibold">
            Kirim Email →
          </span>
        </a>
      </div>
    </main>
  );
}
