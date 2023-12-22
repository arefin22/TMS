import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Home/Login";
import User from "./pages/Home/User";
import Register from "./pages/Home/Register";
import Profile from "./pages/Dashboard/Profile";
import TaskManager from "./pages/Dashboard/TaskManager";
import Contact from "./pages/Home/Contact";
import About from "./pages/Home/About";
import PrivateRoute from "./authentications/PrivateRoute";

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
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ],
    },
    {
        path: '',
        element: <User />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/dashboard/task',
                element: <PrivateRoute><TaskManager /></PrivateRoute>
            }
        ]


    }
]);

export default router