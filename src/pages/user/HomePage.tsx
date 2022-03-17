type Props = {};

const HomePage = (props: Props) => {
    return (
        <div className="">
            <section>
                <a href="" style={{ backgroundImage: 'url(https://caodang.fpt.edu.vn/wp-content/uploads/1900x750-3.png)'}} className="block pt-[35%] bg-no-repeat bg-center bg-cover mt-2"></a>
            </section>

            <section className="bg-white mt-6">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase">
                Sản phẩm nổi bật
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                alt="Front of men's Basic Tee in black."
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Basic Tee
                                </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                alt="Front of men's Basic Tee in black."
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Basic Tee
                                </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                alt="Front of men's Basic Tee in black."
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Basic Tee
                                </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                                alt="Front of men's Basic Tee in black."
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Basic Tee
                                </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">Black</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">$35</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-10 mb-6">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase">
                Bài viết mới cập nhật
                </h2>

                <div className="mt-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="object-cover w-full h-64 rounded" alt="" />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">13 Jul 2020</p>
                            <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                                <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex space-x-4">
                                <a href="/" aria-label="Likes" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                    <div className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                            <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit={10} />
                                            <path d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </a>
                                <a href="/" aria-label="Comments" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                    <div className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                            <polyline points="23 5 23 18 19 18 19 22 13 18 12 18" fill="none" strokeMiterlimit={10} />
                                            <polygon points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="object-cover w-full h-64 rounded" alt="" />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">13 Jul 2020</p>
                            <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                                <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex space-x-4">
                                <a href="/" aria-label="Likes" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                    <div className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                            <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit={10} />
                                            <path d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </a>
                                <a href="/" aria-label="Comments" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                    <div className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                            <polyline points="23 5 23 18 19 18 19 22 13 18 12 18" fill="none" strokeMiterlimit={10} />
                                            <polygon points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="object-cover w-full h-64 rounded" alt="" />
                        </a>
                        <div className="py-5">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">13 Jul 2020</p>
                            <a href="/" aria-label="Article" className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                                <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex space-x-4">
                                <a href="/" aria-label="Likes" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                    <div className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                            <polyline points="6 23 1 23 1 12 6 12" fill="none" strokeMiterlimit={10} />
                                            <path d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.4K</p>
                                </a>
                                <a href="/" aria-label="Comments" className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group">
                                    <div className="mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700">
                                            <polyline points="23 5 23 18 19 18 19 22 13 18 12 18" fill="none" strokeMiterlimit={10} />
                                            <polygon points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2" fill="none" stroke="currentColor" strokeMiterlimit={10} />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">81</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;