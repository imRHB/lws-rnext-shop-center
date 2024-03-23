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
    } = product;

    return (
        <main class="h-screen">
            <section class="bg-[#fafaf2] h-full py-20">
                <div class="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
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
            </section>
        </main>
    );
}
