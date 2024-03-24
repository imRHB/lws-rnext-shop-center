"use client";

import { usePathname, useRouter } from "next/navigation";

export default function CategoryList({ categoryList }) {
    const router = useRouter();
    const pathname = usePathname();
    const activePath = pathname.split("/")[2];
    console.log(activePath);

    const onAction = (categoryName) => {
        router.push(`/category/${categoryName.toLowerCase()}`);
    };

    return (
        <div className="sticky flex items-center justify-between w-full my-10 top-20 lg:block lg:w-2/12 lg:my-0 lg:mt-4">
            <CategoryItem
                categoryName={"all"}
                activePath={activePath}
                onAction={onAction}
            />
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
            onClick={() => onAction(categoryName.toLowerCase())}
        >
            {categoryName}
        </button>
    );
}
