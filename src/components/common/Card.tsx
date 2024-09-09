import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export function Card({
    src,
    title,
    authors,
    binding,
    copyright,
    styleImage
}: {

    src: string;
    title: string;
    authors: string[]
    binding: string
    copyright: number
    styleImage?: string
}) {
    return (
        <div className=" bg-base-100">
            <figure className="cursor-pointer">
                <img src={src} alt={title} className={styleImage} />
            </figure>
            <div className="flex flex-col justify-between py-4">
                <div className="card-normal">
                    <h1 className="items-start font-bold text-md h-14">{title}</h1>
                    <div className="flex text-sm">
                        <p className={binding ? "text-gray-800" : "text-red-500"}>
                            {binding || "unknown"}
                        </p>
                        {' - '}
                        <p className={copyright ? "text-gray-800" : "text-red-500"}>
                            {copyright || "unknown"}
                        </p>
                    </div>
                    <p className="pb-2 text-sm text-gray-500">{authors?.join(", ")}</p>
                </div>
                <div className="justify-start card-actions">
                    <button className="text-sm text-blue-400">Learn More <ChevronRightIcon /></button>
                </div>
            </div>
        </div>
    );
}

export function CardWrapper({ children, className, id }: { id: string; children: React.ReactNode, className?: string }) {
    return (
        <div className={`h-full mr-2 ${className}`} id={id} >{children}</div>
    );
}
