export default function About() {
  return (
    <main className="bg-base-200 min-h-screen px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Tentang HIMA UNIPER</h1>

          <p className="text-base-content/70 mx-auto mt-4 max-w-2xl">
            Hubungi Himpunan Mahasiswa Universitas Pertiba melalui media sosial
            dan kontak resmi kami.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-pink-100 p-8 text-center text-pink-600 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8"
              >
                <rect width="18" height="18" x="3" y="3" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>

            <h2 className="text-xl font-bold">Instagram</h2>
            <p className="mt-2 text-sm opacity-70">
              Ikuti kegiatan dan informasi terbaru HIMA UNIPER
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl bg-green-100 p-8 text-center text-green-600 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8"
              >
                <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                <path d="M8.5 8.5c.3-.6.6-.6 1-.6h.4c.2 0 .4.1.5.4l.6 1.5c.1.3.1.5-.1.7l-.5.6c-.1.1-.1.3 0 .5.5.8 1.2 1.5 2 2 .2.1.4.1.5 0l.7-.6c.2-.2.4-.2.7-.1l1.4.7c.3.1.4.3.3.6l-.2.8c-.1.4-.4.7-.8.8-1 .2-2.3-.2-3.8-1.3-1.5-1.1-2.7-2.5-3.4-3.8-.7-1.3-.8-2.3-.3-2.9Z" />
              </svg>
            </div>

            <h2 className="text-xl font-bold">WhatsApp</h2>
            <p className="mt-2 text-sm opacity-70">
              Hubungi kami untuk informasi dan pertanyaan
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:email@contoh.com"
            className="group rounded-2xl bg-blue-100 p-8 text-center text-blue-600 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <h2 className="text-xl font-bold">Email</h2>
            <p className="mt-2 text-sm opacity-70">
              Kirim pertanyaan atau pesan melalui email resmi
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
