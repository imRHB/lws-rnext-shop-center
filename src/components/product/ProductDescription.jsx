import { getDiscountedPrice } from "@/lib";
import Star from "../Star";

export default function ProductDescription({ details }) {
    const { title, description, category, price, discountPercentage } = details;

    return (
        <div className="w-full lg:w-5/12">
            <h1 className="font-serif text-xl italic font-semibold lg:text-3xl">
                {title}
            </h1>
            <span className="text-[#919090] my-3 capitalize">{category}</span>
            <div className="flex items-center justify-start gap-1 mt-3">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
            <hr className="my-5 bg-black" />

            <div>
                <p className="my-3">
                    <span className="line-through text-rose-600 opacity-60">
                        ${price}
                    </span>
                    <span className="text-2xl font-bold">
                        ${getDiscountedPrice(price, discountPercentage)}
                    </span>
                </p>
            </div>
            <div>
                <p className="leading-7">{description}</p>

                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                    Add To Cart - $
                    {getDiscountedPrice(price, discountPercentage)}
                </button>
            </div>
        </div>
    );
}
