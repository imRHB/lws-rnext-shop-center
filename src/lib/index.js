import { PRODUCT_LIST } from "@/data/products";

export function getAllProducts() {
    return PRODUCT_LIST;
}

export function getProductById(productId) {
    return PRODUCT_LIST.find((product) => product.id.toString() === productId);
}

export function getProductByCategoryName(categoryName) {
    if (categoryName.toLowerCase() === "all") return PRODUCT_LIST;

    return PRODUCT_LIST.filter(
        (product) =>
            product.category.toLowerCase() === categoryName.toLowerCase()
    );
}

export function getCategoryList() {
    let categoryList = PRODUCT_LIST.map((product) => product.category);
    categoryList = ["all", ...categoryList];
    return [...new Set(categoryList)];
}

export function getDiscountedPrice(originalPrice, percentage) {
    return (originalPrice - (originalPrice * percentage) / 100).toFixed(2);
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
