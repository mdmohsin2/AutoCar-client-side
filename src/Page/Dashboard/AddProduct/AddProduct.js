import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const date = new Date()
    const postTime = format(date, 'PP')
    const navigate  = useNavigate()

    const handleAddToCard = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const category = form.category.value;
        const opinion = form.opinion.value;
        const isVerified = form.isVerified.value;
        const picture = form.picture.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const yearOfUse = form.yearOfUse.value;
        const sellerName = form.sellerName.value;
        const location = form.location.value;
        const description = form.description.value;



        const booking = {
            title,
            category,
            opinion,
            isVerified,
            picture,
            originalPrice,
            resalePrice,
            yearOfUse,
            sellerName,
            location,
            description,
            postTime,
            email:user.email
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Product Add confirm')
                    form.reset();
                    navigate('/dashboard/myProduct')
                }
                else {
                    toast.error(data.message)
                }

            })

    }

    return (
        <div>
            <h2 className='text-4xl text-center text-orange-500 font-bold my-4'>Add Products</h2>
            <div className='flex justify-center items-center'>
                <div className='w-96 bg-gray-800 rounded-md p-7'>
                    <form onSubmit={handleAddToCard}>
                        <input type="text" name='title' placeholder="Model" className="input input-sm input-bordered w-full max-w-xs" />
                        <select name='category' className="select select-sm select-bordered w-full max-w-xs my-2">
                            <option disabled selected>Category</option>
                            <option value="Audi Car">Audi Car</option>
                            <option value="Bmw Car">Bmw Car</option>
                            <option value="Toyota Car">Toyota car</option>
                        </select>
                        <select name='opinion' className="select select-sm select-bordered w-full max-w-xs">
                            <option disabled selected>Opinion</option>
                            <option value="good">good</option>
                            <option value="Very good">Very good</option>
                        </select>
                        <select name='isVerified' className="select select-sm select-bordered w-full max-w-xs my-2">
                            <option disabled selected>Verified</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                        <input type="text" name='picture' placeholder="Photo Url" className="input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" name='originalPrice' placeholder="OriginalPrice" className=" my-2 input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" name='resalePrice' placeholder="ResalePrice" className="input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" name='yearOfUse' placeholder="Year Of Use" className=" my-2 input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" name='sellerName' placeholder="Seller Name" className="input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" name='location' placeholder="location" className=" my-2 input input-sm input-bordered w-full max-w-xs" />
                        <textarea name='description' className="textarea textarea-bordered " cols="42" rows="4" placeholder="description"></textarea>
                        <input type="submit" className='w-full btn bg-gray-600' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;