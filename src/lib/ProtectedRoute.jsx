import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.user); // Redux se user data
  const location = useLocation(); // Current route ka path

  return user ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/login?redirectTo=${encodeURIComponent(location.pathname)}`}
      replace
    />
  );
};
export const ProtectDoctor = () => {
  const user = useSelector((state) => state.auth.user); // Redux se user data
  const location = useLocation(); // Current route ka path

  return user?.iAm === "doctor" ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/login?redirectTo=${encodeURIComponent(location.pathname)}`}
      replace
    />
  );
};
