import Image from "next/image";

export default function Message({ title, description, imgSrc }) {
    return (
        <div className="flex flex-col items-center justify-center max-w-md gap-4">
            {imgSrc && (
                <Image
                    src={imgSrc}
                    height={200}
                    width={200}
                    alt={title ?? description}
                />
            )}
            {title && (
                <h3 className="text-3xl font-extrabold text-slate-700">
                    {title}
                </h3>
            )}
            <p className="font-semibold text-slate-600">{description}</p>
        </div>
    );
}
