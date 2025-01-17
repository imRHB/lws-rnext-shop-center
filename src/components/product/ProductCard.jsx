import Link from "next/link";

import { getDiscountedPrice } from "@/lib";

export default function ProductCard({ product }) {
    const {
        id,
        title,
        description,
        category,
        price,
        discountPercentage,
        thumbnail,
    } = product;

    return (
        <div>
            <div
                className="relative delay-150 w-full h-[205px] lg:h-[310px] bg-cover bg-center transition-all rounded-lg duration-3000 ease-in-out transform"
                style={{ backgroundImage: `url(${thumbnail})` }}
            />

            <h2 className="mt-2 text-sm lg:text-base">
                <Link
                    href={`/products/${id}`}
                    className="text-base font-bold capitalize"
                >
                    {title}
                </Link>
                <span className="text-[#919090] ml-2">
                    <Link
                        href={`/category/${category.toLowerCase()}`}
                        className="capitalize"
                    >
                        ({category})
                    </Link>
                </span>
            </h2>
            <p className="text-[#919090] text-sm">{description}</p>

            <p className="mt-4 text-sm text-rose-600">
                <span className="text-[#919090] line-through mr-2">
                    ${price}
                </span>{" "}
                <span className="font-bold">
                    ${getDiscountedPrice(price, discountPercentage)}
                </span>
            </p>
        </div>
    );
}
