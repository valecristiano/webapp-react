import { Outlet, NavLink } from "react-router";

export default function MainLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink to="/" className="navbar-brand" aria-current="page">
            BoolFlix
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"></li>
            </ul>
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
