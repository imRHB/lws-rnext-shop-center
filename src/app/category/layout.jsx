import CategoryList from "@/components/CategoryList";

export default function CategoryLayout({ children }) {
    return (
        <main className="items-start justify-between w-11/12 py-0 mx-auto lg:w-10/12 max-w-7xl lg:py-10 lg:flex">
            <CategoryList />
            {children}
        </main>
    );
}
