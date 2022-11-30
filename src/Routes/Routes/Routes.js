import  { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Page/Blog/Blog";
import AddProduct from "../../Page/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Page/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Page/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Page/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../Page/Dashboard/Dashboard/MyOrder/MyOrder";
import MyProducts from "../../Page/Dashboard/MyProducts/MyProducts";
import CategoryPage from "../../Page/Home/CategoryPage/CategoryPage";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import Payment from "../../Page/Payment/Payment";
import Report from "../../Page/Report/Report";
import Error from "../../Page/Shared/Error/Error";
import SignUp from "../../Page/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
            {
                path: '/dashboard/myOrder',
                element: <BuyerRoute><MyOrder></MyOrder></BuyerRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/report',
                element: <AdminRoute><Report></Report></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <Error></Error>,
    }
])

export default router;