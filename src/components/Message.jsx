export default function Message({ title, description }) {
    return (
        <div className="flex flex-col max-w-md gap-2">
            {title && (
                <h3 className="text-3xl font-extrabold text-slate-700">
                    {title}
                </h3>
            )}
            <p className="font-semibold text-slate-600">{description}</p>
        </div>
    );
}
