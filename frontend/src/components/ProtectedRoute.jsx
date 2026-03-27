import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

// Redirects to login if user is not authenticated or role doesn't match
function ProtectedRoute({ children, role }) {
  const { user } = useContext(AppContext);

  if (!user) return <Navigate to="/" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;
