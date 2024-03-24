import "./globals.css";

export const metadata = {
    title: "Shop Center | LWS",
    description: "A Shop for Reactive Accelerator Batch, brought in by LWS!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
