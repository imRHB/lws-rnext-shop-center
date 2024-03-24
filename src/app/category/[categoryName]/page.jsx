import ProductCard from "@/components/product/ProductCard";
import { getCategoryList, getProductByCategoryName } from "@/lib";
import React from "react";

export default function CategoryWiseProductPage({ params }) {
    const productList = getProductByCategoryName(params.categoryName);
    const categoryList = getCategoryList();

    const noProduct =
        !categoryList.includes(params.categoryName) || productList.length <= 0;

    return (
        <div className="sticky top-0 right-0 grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10">
            {categoryList.includes(params.categoryName) ? (
                <React.Fragment>
                    {productList.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </React.Fragment>
            ) : (
                <React.Fragment>No category found!</React.Fragment>
            )}
        </div>
    );
}
