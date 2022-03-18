import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from 'react';

type Inputs = {
    name: string,
    price: number,
    description: string,
    category: string,
    status: number,
    image: string
};

type Props = {
    onSubmitAdd: (product: any) => void
};

// validation schema
const schema = yup.object().shape({
    name: yup
        .string()
        .required("Vui lòng nhập tên SP"),
    price: yup
        .string()
        .required("Vui lòng nhập giá SP"),
    description: yup
        .string()
        .required("Vui lòng nhập mô tả SP"),
    category: yup
        .string()
        .required("Vui lòng chọn danh mục SP"),
    status: yup
        .string()
        .required("Vui lòng chọn trạng thái sản phẩm"),
    // image: yup
    //     .string()
    //     .required("Vui lòng chọn ảnh SP")
});

const AddProduct = ({ onSubmitAdd }: Props) => {
    const [preview, setPreview] = useState("https://res.cloudinary.com/levantuan/image/upload/v1644302455/assignment-js/thumbnail-image-vector-graphic-vector-id1147544807_ochvyr.jpg");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>({ resolver: yupResolver(schema) });

    // redirect
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = dataInput => {
        onSubmitAdd(dataInput);
        navigate("/admin/products");
    };

    // preview image
    const handlePreview = (e: {}) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div>
            <header className="flex justify-between items-center px-3 py-2 bg-white shadow-sm">
                <h2 className="text-sm">Thêm sản phẩm</h2>

                <Link to="/admin/products" className="cursor-pointer inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                DS SP
                </Link>
            </header>

            <main className="p-3 min-h-[calc(100vh-110px)]">
                <section className="px-4 sm:px-0">
                    <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                        <input type="text" {...register('name')} className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tên sản phẩm" />
                                        {errors.name && <span className="mt-1 text-red-400 text-sm">{errors.name.message}</span>}
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Giá sản phẩm</label>
                                        <input type="number" {...register('price')} className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập giá sản phẩm" />
                                        {errors.price && <span className="mt-1 text-red-400 text-sm">{errors.price.message}</span>}
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả</label>
                                        <textarea id="description" {...register("description")} rows={3} className="py-2 px-3 focus:outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nhập mô tả sản phẩm" defaultValue={""} />
                                        {errors.description && <span className="mt-1 text-red-400 text-sm">{errors.description.message}</span>}
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Danh mục sản phẩm</label>
                                        <select id="category" {...register("category")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn danh mục sản phẩm --</option>
                                            <option value="123">-- Chọn danh mục sản phẩm --</option>
                                            <option value="123">-- Chọn danh mục sản phẩm --</option>
                                        </select>
                                        {errors.category && <span className="mt-1 text-red-400 text-sm">{errors.category.message}</span>}
                                    </div>
                                    <div className="col-span-6 md:col-span-3">
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Trạng thái</label>
                                        <select id="status" {...register("status")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option value="">-- Chọn trạng thái sản phẩm --</option>
                                            <option value={0}>Ẩn</option>
                                            <option value={1}>Hiển thị</option>
                                        </select>
                                        {errors.status && <span className="mt-1 text-red-400 text-sm">{errors.status.message}</span>}
                                    </div>

                                    <div className="col-span-3">
                                        <label className="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                                        <div className="mt-1">
                                            <img src={preview} alt="Preview Image" id="form__add-product-preview" className="h-60 w-full object-cover rounded-md" />
                                        </div>
                                    </div>

                                    <div className="col-span-6">
                                        <label className="block text-sm font-medium text-gray-700">Ảnh sản phẩm</label>
                                        <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" onChange={handlePreview} type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Thêm sản phẩm
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}

export default AddProduct;