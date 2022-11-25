import  { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Page/Blog/Blog";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import Error from "../../Page/Shared/Error/Error";
import SignUp from "../../Page/SignUp/SignUp";

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
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>,
    }
])

export default router;