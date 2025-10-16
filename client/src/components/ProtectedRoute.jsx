import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../store/authContext";

export default function ProtectedTaskRoute({ children }) {
  const ctxAuth = useContext(AuthContext);
  if (ctxAuth.token) {
    return <Navigate to={"/"} replace />;
  }

  return children;
}
