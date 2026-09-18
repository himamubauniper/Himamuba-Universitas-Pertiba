export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">Beranda</a>
            </li>

            <li>
              <a href="/berita">Berita</a>
            </li>

            <li>
              <a href="/kegiatan">Kegiatan</a>
            </li>

            <li>
              <a href="/tentang">Tentang</a>
            </li>
          </ul>
        </div>

        <a href="/" className="btn btn-ghost text-xl">
          HIMA UNIPER
        </a>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Beranda</a>
          </li>

          <li>
            <a href="/berita">Berita</a>
          </li>

          <li>
            <a href="/kegiatan">Kegiatan</a>
          </li>

          <li>
            <a href="/tentang">Tentang</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
