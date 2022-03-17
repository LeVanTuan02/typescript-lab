import { Link } from 'react-router-dom';

type Props = {}

const AddProduct = (props: Props) => {
    return (
        <div>
            <header className="flex justify-between items-center px-3 py-2 bg-white shadow-sm">
                <h2 className="text-sm">Thêm sản phẩm</h2>

                <Link to="/admin/products" className="cursor-pointer inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                DS SP
                </Link>
            </header>

            <main className="p-3">
                <section className="px-4 sm:px-0">
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6">
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                    <input type="text" name="title" id="title" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tiêu đề bài viết" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả</label>
                                    <textarea id="description" name="description" rows={3} className="py-2 px-3 focus:outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Nhập mô tả bài viết" defaultValue={""} />
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Danh mục bài viết</label>
                                    <select id="category" name="category" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>-- Chọn danh mục bài viết --</option>
                                    <option value={1}>Tin tức học tập</option>
                                    <option value={2}>Hoạt động sinh viên</option>
                                    </select>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Trạng thái</label>
                                    <select id="status" name="status" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>-- Chọn trạng thái bài viết --</option>
                                    <option value={0} selected>Ẩn</option>
                                    <option value={1}>Hiển thị</option>
                                    </select>
                                </div>
                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">Ảnh bìa</label>
                                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
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