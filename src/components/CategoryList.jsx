"use client";

import { getCategoryList } from "@/lib";
import { usePathname, useRouter } from "next/navigation";

export default function CategoryList() {
    const router = useRouter();
    const pathname = usePathname();

    const categoryList = getCategoryList();
    const activePath = pathname.split("/")[2];

    const onAction = (categoryName) => {
        router.push(`/category/${categoryName.toLowerCase()}`);
    };

    return (
        <div className="sticky flex flex-wrap items-center justify-center w-full gap-4 my-10 lg:block lg:w-2/12 lg:my-0 lg:mt-4 top-24">
            {categoryList.map((category) => (
                <CategoryItem
                    key={category}
                    categoryName={category}
                    activePath={activePath}
                    onAction={onAction}
                />
            ))}
        </div>
    );
}

function CategoryItem({ categoryName, activePath, onAction }) {
    return (
        <button
            className={`box-border block h-6 mt-5 capitalize border-black hover:border-b ${
                activePath === categoryName.toLowerCase()
                    ? "font-bold text-violet-400"
                    : ""
            }`}
            onClick={() => onAction(categoryName)}
        >
            {categoryName}
        </button>
    );
}
