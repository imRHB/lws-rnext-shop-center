import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h2 className="text-3xl font-extrabold md:text-5xl text-violet-400">
                404
            </h2>
            <p className="font-semibold">Could not find requested resource</p>
            <Link href="/" className="font-semibold text-violet-400">
                Return Home
            </Link>
        </div>
    );
}
