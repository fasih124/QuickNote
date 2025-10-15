import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProtectedTaskPage from "./pages/SignUpPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignUpPage /> },
  { path: "Tasks", element: <ProtectedTaskPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
