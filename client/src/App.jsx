import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage, { LoginAction } from "./pages/LoginPage.jsx";
import SignUpPage, { signupAction } from "./pages/SignUpPage.jsx";
import ProtectedTaskPage from "./pages/ProtectedPage.jsx";
import ProtectedTaskRoute from "./components/ProtectedRoute.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "login", element: <LoginPage />, action: LoginAction },
  { path: "signup", element: <SignUpPage />, action: signupAction },
  {
    path: "tasks",
    element: (
      <ProtectedTaskRoute>
        <ProtectedTaskPage />
      </ProtectedTaskRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
