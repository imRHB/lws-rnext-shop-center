import ProductDescription from "@/components/product/ProductDescription";
import ProductImageViewer from "@/components/product/ProductImageViewer";
import { getProductById } from "@/lib";

export default function ProductDetailsPage({ params }) {
    const product = getProductById(params.productId);
    const {
        title,
        description,
        category,
        price,
        discountPercentage,
        thumbnail,
        images,
    } = product || {};

    let content = null;

    if (!product) {
        content = <div>Product not found</div>;
    }

    if (product) {
        content = (
            <div className="flex flex-col items-center justify-between w-11/12 gap-12 mx-auto lg:w-8/12 max-w-7xl lg:flex-row">
                <ProductImageViewer
                    title={title}
                    thumbnail={thumbnail}
                    images={images}
                />

                <ProductDescription
                    details={{
                        title,
                        description,
                        category,
                        price,
                        discountPercentage,
                    }}
                />
            </div>
        );
    }

    return (
        <main className="h-screen">
            <section className="bg-[#fafaf2] h-full py-20">{content}</section>
        </main>
    );
}
