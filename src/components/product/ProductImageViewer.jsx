"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductImageViewer({ title, thumbnail, images }) {
    const [previewImage, setPreviewImage] = useState(thumbnail);

    return (
        <div class="w-full lg:w-7/12 border border-slate-500/20 p-4 rounded-lg">
            <Image
                src={previewImage}
                height={100}
                width={100}
                class="w-[400px] h-[500px] mx-auto object-cover rounded-md"
                alt={title}
            />

            <div class="flex gap-4 mt-4 overflow-x-scroll">
                {images.map((imgSrc) => (
                    <Image
                        key={imgSrc}
                        src={imgSrc}
                        height={100}
                        width={100}
                        class="w-[100px] h-[100px] mx-auto border object-cover rounded-md cursor-pointer"
                        alt={title}
                        onClick={() => setPreviewImage(imgSrc)}
                    />
                ))}
            </div>
        </div>
    );
}
