import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./pages/layouts/AdminLayout";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import HomePage from "./pages/user/HomePage";
import ProductPage from "./pages/user/ProductPage";
import NewsPage from "./pages/user/NewsPage";
import ContactPage from "./pages/user/ContactPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import AboutPage from "./pages/user/AboutPage";
import ProductDetail from "./pages/user/ProductDetail";
import ListProduct from "./pages/admin/product/ListProduct";
import AddProduct from "./pages/admin/product/AddProduct";
import { add } from "./api/product";
import { ProductType } from "./types/product";

function App() {
    const handleAddProduct = async ({ name, price, status, category, description }: ProductType) => {
        const { data } = await add({
            description,
            name: name,
            price: +price,
            status: +status,
            category: "6232a9a09ef873b2655fe948",
            image: "abc.png"
        });
        console.log(data);
    };

    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path="/" element={<WebsiteLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="news" element={<NewsPage />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="products" element={<ProductPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="product/:id" element={<ProductDetail />} />
                    </Route>

                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="products" element={<ListProduct />} />
                        <Route path="products/add" element={<AddProduct onSubmitAdd={handleAddProduct} />} />
                    </Route>
                </Routes>
            </main>
        </div>
    )
}

export default App;