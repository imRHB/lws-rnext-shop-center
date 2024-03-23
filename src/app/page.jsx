import React from "react";

import Header from "@/components/Header";
import ProductList from "@/components/product/ProductList";
import Subscription from "@/components/Subscription";

export default function HomePage() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <ProductList />
                <Subscription />
            </main>
        </React.Fragment>
    );
}
