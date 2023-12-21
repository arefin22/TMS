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
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <Profile />
            },
            {
                path: '/dashboard/task',
                element: <TaskManager />
            }
        ]


    }
]);

export default router