import Link from "next/link";

import { capitalizeFirstLetter, getCategoryList } from "@/lib";

const exploreItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "All Categories", href: "/category/all" },
    { id: 3, label: "All Products", href: "/category/all" },
];

export default function Footer() {
    const categoryList = getCategoryList();

    return (
        <footer className="flex flex-wrap items-center justify-between w-11/12 py-10 mx-auto lg:w-10/12 max-w-7xl lg:py-16">
            <div className="w-6/12 space-y-3 lg:w-3/12">
                <h3 className="text-xl font-bold text-slate-700">Explore</h3>
                <ul className="flex flex-col gap-1">
                    {exploreItems.map((item) => (
                        <li key={item.id}>
                            <FooterItemLink
                                label={item.label}
                                href={item.href}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-6/12 space-y-3 lg:w-3/12">
                <h3 className="text-xl font-bold text-slate-700">
                    Top Categories
                </h3>
                <ul className="flex flex-col gap-1">
                    {categoryList.slice(1, 4).map((category) => (
                        <li key={category}>
                            <FooterItemLink
                                label={capitalizeFirstLetter(category)}
                                href={`/category/${category.toLowerCase()}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full mt-10 lg:w-6/12 lg:mt-1">
                <div className="flex items-center justify-end gap-5">
                    <div className="lg:w-[250px]">
                        <span className="block text-center lg:text-right">
                            © LWS Shop Center 2024
                        </span>
                        <p className="mt-2 text-center lg:text-right">
                            All images and content may not be used without
                            permission
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterItemLink({ href, label }) {
    return (
        <Link href={href} className="hover:underline underline-offset-2">
            {label}
        </Link>
    );
}
