import  { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Page/Blog/Blog";
import Dashboard from "../../Page/Dashboard/Dashboard/Dashboard";
import CategoryPage from "../../Page/Home/CategoryPage/CategoryPage";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import Error from "../../Page/Shared/Error/Error";
import SignUp from "../../Page/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryPage></CategoryPage></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
                
            }
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
        ]
    },
    {
        path: '*',
        element: <Error></Error>,
    }
])

export default router;