import { Outlet } from "react-router";

export default function mainLayout() {
  return (
    <>
      <h1>Layout</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}
