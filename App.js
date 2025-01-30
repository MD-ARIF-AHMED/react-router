import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Registration from "./components/Registration";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Subjects from "./components/Subjects";
import Reports from "./components/Reports";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },

    {
      path: "/login",
      element: (
        <div>
          <Navbar />
          <Login />,
        </div>
      ),
    },

    {
      path: "/registration",
      element: (
        <div>
          <Navbar />
          <Registration />
        </div>
      ),
    },

    {
      path: "/about",
      element: (
        <ProtectedRoute>
          <div>
            <Navbar />
            <About />
          </div>
        </ProtectedRoute>
      ),
    },

    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <div>
            <Navbar />
            <Dashboard />
          </div>
        </ProtectedRoute>
      ),
      children: [
        {
          path: "subjects",
          element: <Subjects />,
        },

        {
          path: "reports",
          element: <Reports />,
        },
      ],
    },

    {
      path: "/student/:id",
      element: (
        <div>
          <Navbar />
          <ParamComp />
        </div>
      ),
    },

    {
      path: "/logout",
      element: (
        <div>
          <Navbar />
          <Logout />
        </div>
      ),
    },

    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
