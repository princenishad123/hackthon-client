import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // or any auth context you use

export const ProtectedRoute = ({ privateRoute }) => {
  const user = useSelector((state) => state.auth.user); // Replace with your auth logic

  return user ? privateRoute : <Navigate to="/login" replace />;
};
