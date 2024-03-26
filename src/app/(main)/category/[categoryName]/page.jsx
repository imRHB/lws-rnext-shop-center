import Message from "@/components/Message";
import ProductCard from "@/components/product/ProductCard";
import {
    capitalizeFirstLetter,
    getCategoryList,
    getProductByCategoryName,
} from "@/lib";
import React from "react";

export async function generateMetadata({ params }) {
    return {
        title: `Shop Center | Category - ${capitalizeFirstLetter(
            params.categoryName
        )}`,
        description:
            "A Shop for Reactive Accelerator Batch, brought in by LWS!",
    };
}

export default function CategoryWiseProductPage({ params }) {
    const productList = getProductByCategoryName(params.categoryName);
    const categoryList = getCategoryList();

    let content = null;

    if (!categoryList.includes(params.categoryName)) {
        content = (
            <div className="min-h-[40vh] grid place-items-center w-full my-4 lg:w-10/12 lg:my-10">
                <Message
                    title="Not found!"
                    description="We didn't find the category that you're searching for."
                    imgSrc={"/assets/no-search.png"}
                />
            </div>
        );
    }

    if (categoryList.includes(params.categoryName) && productList.length <= 0) {
        content = (
            <div className="min-h-[40vh] grid place-items-center w-full my-4 lg:w-10/12 lg:my-10">
                <Message
                    title="Not found!"
                    description="We didn't find any products for this category."
                    imgSrc={"/assets/no-results.png"}
                />
            </div>
        );
    }

    if (categoryList.includes(params.categoryName) && productList.length > 0) {
        content = (
            <div className="grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10 lg:gap-6 xl:gap-8">
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    }

    return <React.Fragment>{content}</React.Fragment>;
}
