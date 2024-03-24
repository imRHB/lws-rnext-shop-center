import React from "react";

import Message from "@/components/Message";
import ProductCard from "@/components/product/ProductCard";
import {
    capitalizeFirstLetter,
    getCategoryList,
    getProductByCategoryName,
} from "@/lib";

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

    return (
        <div className="sticky top-0 right-0 grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10">
            {categoryList.includes(params.categoryName) ? (
                productList.length <= 0 ? (
                    <Message
                        title="Not found!"
                        description="We didn't find any products for this category."
                    />
                ) : (
                    <React.Fragment>
                        {productList.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </React.Fragment>
                )
            ) : (
                <Message
                    title="Not found!"
                    description="We didn't find the category that you're searching for."
                />
            )}
        </div>
    );
}
