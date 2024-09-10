import { TestimonialsTypes } from "../../types/TestimonialsTypes";

export function TestimonialsCard({
    message,
    name,
    job,
    image,
    color,
}: TestimonialsTypes) {
    return (
        <div className="w-[22em] p-5 rounded"
            style={{ backgroundColor: color }} >
            <div className="rounded-full h-11 w-11 ring-primary ">
                <img src={image} className="object-cover rounded-full w-11 h-11" />
            </div>
            <h4 className="text-md">{name}</h4>
            <p className="pb-5 text-sm text-info">{job}</p>
            <p>{message}</p>
        </div>
    );
}
