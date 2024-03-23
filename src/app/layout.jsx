import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
    title: "Shop Center",
    description: "A Shop for Reactive Accelerator Batch, brought in by LWS!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="sticky top-0 bg-white">
                    <Navbar />
                </div>
                {children}
                <Footer />
            </body>
        </html>
    );
}
