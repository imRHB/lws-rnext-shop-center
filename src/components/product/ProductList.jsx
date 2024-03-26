import { getAllProducts } from "@/lib";
import Message from "../Message";
import ProductCard from "./ProductCard";

export default function ProductList() {
    const products = getAllProducts();

    let content = null;

    if (products.length <= 0) {
        content = (
            <div className="min-h-[40vh] grid place-items-center my-4 lg:my-10">
                <Message
                    title="Not found!"
                    description="We didn't find any products on the server."
                    imgSrc={"/assets/no-results.png"}
                />
            </div>
        );
    }

    if (products.length > 0) {
        content = (
            <div className="grid grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 lg:my-10 xl:gap-8">
                {products.slice(0, 12).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    }

    return (
        <section className="w-11/12 py-10 mx-auto lg:w-10/12 max-w-7xl">
            {content}
        </section>
    );
}
