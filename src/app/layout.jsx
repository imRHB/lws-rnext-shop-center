import "./globals.css";

export const metadata = {
    title: "Shop Center",
    description: "A Shop for Reactive Accelerator Batch, brought in by LWS!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
