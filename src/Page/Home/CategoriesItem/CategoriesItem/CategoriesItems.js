import { Link } from 'react-router-dom';

const CategoriesItems = ({ option,isLoading }) => {
    const { picture, name, _id } = option

    if (isLoading) {
        <progress className="progress progress-primary w-56"></progress>
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="car" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <div className="card-actions">
                    <button className="btn btn-primary">
                        <Link to={`/category/${_id}`}>
                            More Items
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesItems;