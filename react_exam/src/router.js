import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/home";
import Register from "./components/auth/Signup";
import Login from "./components/auth/Login";
import WeightList from "./components/weights/WeightList";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/weights",
        element: (
          <ProtectedRoute>
            <WeightList />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;

