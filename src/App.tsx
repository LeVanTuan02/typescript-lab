import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./pages/layouts/AdminLayout";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import HomePage from "./pages/user/HomePage";
import ProductPage from "./pages/user/ProductPage";

function App() {
    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path="/" element={<WebsiteLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="products" element={<ProductPage />} />
                    </Route>

                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                    </Route>
                </Routes>
            </main>
        </div>
    )
}

export default App;