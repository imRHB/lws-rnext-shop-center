import CategoryList from "@/components/CategoryList";
import ProductCard from "@/components/product/ProductCard";
import { getCategoryList, getProductByCategoryName } from "@/lib";

export default function CategoryWiseProductPage({ params }) {
    const productList = getProductByCategoryName(params.categoryName);
    const categoryList = getCategoryList();

    return (
        <section className="items-start justify-between w-11/12 py-0 mx-auto divide-x-2 lg:w-10/12 max-w-7xl lg:py-10 lg:flex">
            <CategoryList categoryList={categoryList} />

            <div className="sticky top-0 right-0 grid w-full grid-cols-2 gap-4 my-4 lg:w-10/12 lg:grid-cols-3 lg:my-10">
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
