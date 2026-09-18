import { Link } from "react-router-dom";

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
              <Link to="/">Beranda</Link>
            </li>

            <li>
              <Link to="/berita">Berita</Link>
            </li>

            <li>
              <Link to="/kegiatan">Kegiatan</Link>
            </li>

            <li>
              <Link to="/tentang">Tentang</Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl">
          HIMAMUBA UNIVERSITAS PERTIBA
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Beranda</Link>
          </li>

          <li>
            <Link to="/berita">Berita</Link>
          </li>

          <li>
            <Link to="/kegiatan">Kegiatan</Link>
          </li>

          <li>
            <Link to="/tentang">Tentang</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
