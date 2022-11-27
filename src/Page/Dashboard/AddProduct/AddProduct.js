import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <h2 className='text-4xl text-center text-orange-500 font-bold my-4'>Add Products</h2>
            <div className='flex justify-center items-center'>
                <div className='w-96 bg-gray-800 rounded-md p-7'>
                    <form>
                        <input type="text" placeholder="Product title" className="input input-sm input-bordered w-full max-w-xs" />
                        <select className="select select-sm select-bordered w-full max-w-xs my-2">
                            <option disabled selected>Category</option>
                            <option value="Audi Car">Audi Car</option>
                            <option value="Bmw Car">Bmw Car</option>
                            <option value="Toyota Car">Toyota car</option>
                        </select>
                        <input type="text" placeholder="Photo Url" className="input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="OriginalPrice" className=" my-2 input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="ResalePrice" className="input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Year Of Use" className=" my-2 input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Seller Name" className="input input-sm input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="location" className=" my-2 input input-sm input-bordered w-full max-w-xs" />
                        <textarea className="textarea textarea-bordered " cols="42"  rows="4" placeholder="description"></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;