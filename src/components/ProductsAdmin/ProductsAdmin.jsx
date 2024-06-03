import React, { useContext, useState } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
const ProductsAdmin = () => {
    const { addProductsToDB } = useContext(ProductContext)
    const navigate = useNavigate()
    const [file, setFile] = useState(null);
   
    const handleFileChange = async (e) => {
        setFile(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("name", e.target.name.value);
        formData.append("description", e.target.description.value);
        formData.append("size", e.target.size.value);
        formData.append("price", e.target.price.value);
        formData.append("stock", e.target.stock.value);
        formData.append("categoryId", e.target.categoryId.value);
        addProductsToDB(formData)
        navigate("/")
        notification.success({
            message: 'Registered succesfully'})
    }
    return (
        <div>
            <div className="flex justify-center mt-5">
                <form className="flex flex-col w-full max-w-sm" onSubmit={handleSubmit}>
                    <input type="file" name="image" id="" onChange={handleFileChange} />
                    <input
                        className="border-4 border-black mt-4 p-2 rounded-md focus:outline-none"
                        type="text"
                        name="name"
                        placeholder="Enter the products name"
                    />
                    <input
                        className="border-4 border-black mt-4 p-2 rounded-md focus:outline-none"
                        type="text"
                        name="description"
                        placeholder="Enter the product description"
                    />
                    <input
                        className="border-4 border-black mt-4 p-2 rounded-md focus:outline-none"
                        type="text"
                        name="size"
                        placeholder="Enter size"
                    />
                    <input
                        className="border-4 border-black mt-4 p-2 rounded-md focus:outline-none"
                        type="text"
                        name="price"
                        placeholder="Enter price"
                    />
                    <input
                        className="border-4 border-black mt-4 p-2 rounded-md focus:outline-none"
                        type="text"
                        name="stock"
                        placeholder="Enter the stock"
                    />
                    <input
                        className="border-4 border-black mt-4 p-2 rounded-md focus:outline-none"
                        type="text"
                        name="categoryId"
                        placeholder="Enter the categories ID"
                    />
                    <button className="button mt-4 bg-black text-white p-2 rounded-md hover:bg-blue-800">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProductsAdmin