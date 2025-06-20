import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import Auth from "../pages/auth"


export const router = createBrowserRouter ([
    {
        path: '/home', element: <Home />
    },
    {
        path: '/admin', element: <Home />
    },
    {
        path: '/auth', element: <Auth />
    },
]) 