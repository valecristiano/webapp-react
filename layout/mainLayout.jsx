import { Outlet, NavLink } from "react-router";

export default function MainLayout() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid bg-black mx-2 p-2 rounded">
          <NavLink to="/" className="navbar-brand" aria-current="page">
            BoolFlix
          </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
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
