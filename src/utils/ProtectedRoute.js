import { useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  if (localStorage.getItem("jwt") == null) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
