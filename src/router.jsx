import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Home/Login";
import User from "./pages/Home/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },

        ],
    },
    {
        path: '/login',
        element: <User />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    },

    {
        path: '/dashboard',
        element: <Dashboard />
    }
]);

export default router