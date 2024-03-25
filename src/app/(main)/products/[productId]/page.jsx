import Message from "@/components/Message";
import ProductDescription from "@/components/product/ProductDescription";
import ProductImageViewer from "@/components/product/ProductImageViewer";
import { getProductById } from "@/lib";

export async function generateMetadata({ params }) {
    const product = getProductById(params.productId);

    return {
        title: `Shop Center | ${product ? product.title : "Not found"}`,
        description:
            "A Shop for Reactive Accelerator Batch, brought in by LWS!",
    };
}

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
        content = (
            <div className="flex flex-col items-center justify-between w-11/12 gap-12 mx-auto lg:w-8/12 max-w-7xl min-h-[40vh]">
                <Message
                    title="Not Found!"
                    description="We didn't find the product that you're looking for!"
                    imgSrc={"/assets/no-results.png"}
                />
            </div>
        );
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
        <main className="">
            <section className="bg-[#fafaf2] h-full py-20">{content}</section>
        </main>
    );
}
