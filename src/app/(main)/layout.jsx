import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Shop Center | LWS",
    description: "A Shop for Reactive Accelerator Batch, brought in by LWS!",
};

export default function MainLayout({ children }) {
    return (
        <React.Fragment>
            <div className="sticky top-0 z-50 bg-white">
                <Navbar />
            </div>
            {children}
            <Footer />
        </React.Fragment>
    );
}
