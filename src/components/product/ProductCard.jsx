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
        <div className="px-4">
            <div
                className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform rounded-md mx-auto"
                style={{ backgroundImage: `url(${thumbnail})` }}
                // need to fix the tailwind arbitrary class for bg-[url('')]
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
            <p className="text-[#919090] text-sm truncate">{description}</p>

            <p className="mt-4 text-sm text-rose-600">
                <span className="text-[#919090] line-through">${price}</span> $
                {getDiscountedPrice(price, discountPercentage)}
            </p>
        </div>
    );
}
