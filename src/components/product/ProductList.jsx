import { getAllProducts } from "@/lib";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const products = getAllProducts();

    return (
        <section className="w-11/12 py-10 mx-auto lg:w-10/12 max-w-7xl">
            <div className="grid grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4 lg:my-10">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
