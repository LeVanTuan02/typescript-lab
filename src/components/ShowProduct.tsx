import type { Product } from "../types/product"

type ShowProductProps = {
    products: Product[]
}

// const ShowProduct = (props: ShowProductProps) => {
//     console.log(props);
//     return (
//         <h1>Components</h1>
//     )
// }

const ShowProduct = ({ products }: { products: Product[] }) => {
    console.log(products);
    return (
        <div>
            <h1>List products</h1>
            {products.map(item => (
                <li key={item.id}>{item.id} - {item.name}</li>
            ))}
        </div>
    )
}

export default ShowProduct;