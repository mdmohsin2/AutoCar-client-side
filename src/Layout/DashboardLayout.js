import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Page/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)                   
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gray-400 text-white font-bold mr-2">
                        {
                            isBuyer &&
                            <li><Link to='/dashboard'>My Orders</Link></li>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/myProduct'>My Products</Link></li>
                            </>
                        }
                        <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;