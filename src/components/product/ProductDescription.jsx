import { getDiscountedPrice } from "@/lib";
import Star from "../Star";

export default function ProductDescription({ details }) {
    const { title, description, category, price, discountPercentage } = details;

    return (
        <div class="w-full lg:w-5/12">
            <h1 class="italic text-xl lg:text-3xl font-serif font-semibold">
                {title}
            </h1>
            <span class="text-[#919090] my-3 capitalize">{category}</span>
            <div class="mt-3 flex items-center justify-start gap-1">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <hr class="my-5 bg-black" />

            <div>
                <p class="my-3">
                    <span class="text-rose-600 opacity-60 line-through">
                        ${price}
                    </span>
                    <span class="font-bold text-2xl">
                        ${getDiscountedPrice(price, discountPercentage)}
                    </span>
                </p>
            </div>
            <div>
                <p class="leading-7">{description}</p>

                <button class="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                    Add To Cart - $
                    {getDiscountedPrice(price, discountPercentage)}
                </button>
            </div>
        </div>
    );
}
