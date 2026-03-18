import { Outlet, NavLink } from "react-router";

export default function MainLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid bg-black mx-2 p-2 rounded">
          <NavLink to="/" className="navbar-brand" aria-current="page">
            BoolFlix
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/movies" className="nav-link" aria-current="page">
                  Movies List
                </NavLink>
              </li>
            </ul>
            {/* <span class="navbar-text">Navbar</span> */}
          </div>
        </div>
      </nav>
      <main>
        <div className="container py-3">
          <Outlet />
        </div>
      </main>
    </>
  );
}
