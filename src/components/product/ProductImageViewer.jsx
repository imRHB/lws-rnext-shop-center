"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImageViewer({ title, thumbnail, images }) {
    const [previewImage, setPreviewImage] = useState(thumbnail);

    return (
        <div className="w-full p-4 border rounded-lg lg:w-7/12 border-slate-500/20">
            <Image
                src={previewImage}
                height={500}
                width={500}
                className="w-[400px] h-[500px] mx-auto object-cover rounded-md"
                alt={title}
            />

            <div className="flex gap-4 mt-4 overflow-x-scroll">
                {images.map((imgSrc) => (
                    <Image
                        key={imgSrc}
                        src={imgSrc}
                        height={500}
                        width={500}
                        className="w-[100px] h-[100px] mx-auto border object-cover rounded-md cursor-pointer"
                        alt={title}
                        onClick={() => setPreviewImage(imgSrc)}
                    />
                ))}
            </div>
        </div>
    );
}
