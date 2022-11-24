import  { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home/Home";
import Error from "../../Page/Shared/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>,
    }
])

export default router;