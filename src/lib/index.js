import { PRODUCT_LIST } from "@/data/products";

export function getAllProducts() {
    return PRODUCT_LIST;
}

export function getProductById(productId) {
    return PRODUCT_LIST.find((product) => product.id.toString() === productId);
}

export function getDiscountedPrice(originalPrice, percentage) {
    return (originalPrice - (originalPrice * percentage) / 100).toFixed(2);
}
