import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAll } from '../../../api/product';
import { ProductType } from '../../../types/product';

type Props = {}

const ListProduct = (props: Props) => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await getAll();
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <div>
            <header className="flex justify-between items-center px-3 py-2 bg-white shadow-sm">
                <h2 className="text-sm">DS sản phẩm</h2>

                <Link to="/admin/products/add" type="submit" className="cursor-pointer inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Thêm SP
                </Link>
            </header>

            <main className="p-3">
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="p-4 bg-white">
                                <label htmlFor="table-search" className="sr-only">Search</label>
                                <div className="relative mt-1">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                    </div>
                                    <input type="text" id="table-search" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5" placeholder="Search for items" />
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th scope="col" className="p-4">
                                                <div className="flex items-center">
                                                <input id="checkbox-search-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500focus:ring-2" />
                                                <label htmlFor="checkbox-search-all" className="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                                Name
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                                View
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase">
                                                Price
                                            </th>
                                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase text-right">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {products.map(item => (
                                            <tr key={item._id} className="hover:bg-gray-100">
                                                <td className="p-4 w-4">
                                                    <div className="flex items-center">
                                                        <input id="checkbox-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2" />
                                                        <label htmlFor="checkbox-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{item.name}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap">{item.view}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">{item.price}</td>
                                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                    <Link to={`/admin/product/${item._id}/edit`} type="button" className="text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-1.5 text-center mr-2">Edit</Link>
                                                    <a type="button" className="text-white bg-red-500 cursor-pointer hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-1.5 text-center">Delete</a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ListProduct;