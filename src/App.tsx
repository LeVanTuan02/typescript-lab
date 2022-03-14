import logo from './logo.svg'
import './App.css'
import { useState } from "react";
import ShowProduct from "./components/ShowProduct";
import type { Product } from "./types/product"

function App() {
    const [products, setProducts] = useState<Product[]>(() => {
        return [
            {
                id: 1,
                name: "Product A",
                description: "Desc"
            },
            {
                id: 2,
                name: "Product B",
                description: "Desc B"
            }
        ];
    });

    return (
        <div className="App">
            <ShowProduct products={products} />
        </div>
    )
}

export default App;