import { useFetchBooks } from "../../hooks/useFetchBooks";
import { BooksTypes } from "../../types/BooksTypes";
import { CardSkeletonHighlight } from "../common/skeleton/CardSkeletonHighlight";

export function HighlightBookCard() {
    const { data: books = [], isLoading } = useFetchBooks({
        series: "The Midnight Library",
        results_per_page: "4",
    });


    return (
        <section className="w-full px-2 carousel ">
            <span className="absolute left-0 w-full h-screen 2xl:h-[43em] bg-accent -z-20"></span>
            {isLoading && <CardSkeletonHighlight />}
            {books.map((item: BooksTypes) => (
                <div
                    key={item.work_id}
                    id={item.work_id}
                    className="flex items-center w-full px-2 pt-10 pb-20 mx-auto border 2xl:py-10 carousel-item"
                >
                    {/* Kolom Kiri: Konten */}
                    <div className="w-1/2">
                        <h1 className="text-4xl font-bold">
                            {item.title || "Unknown Title"}
                        </h1>
                        <table className="mt-2 table-auto border-spacing-y-2.5 border-separate">
                            <tbody>
                                <tr>
                                    <th className="w-[10em] text-left ">Synopsis:</th>
                                    <td>{item.summary || "No synopsis available"}</td>
                                </tr>
                                <tr>
                                    <th className="w-[10em] text-left">Thick:</th>
                                    <td>{item.published_works?.[0]?.page_count || "Unknown"}</td>
                                </tr>
                                <tr>
                                    <th className="w-[10em] text-left">Language:</th>
                                    <td>{item.language || "Unknown"}</td>
                                </tr>
                                <tr>
                                    <th className="w-[10em] text-left">Date of issue:</th>
                                    <td>{item.copyright || "Unknown"}</td>
                                </tr>
                                <tr>
                                    <th className="w-[10em] text-left">Publisher:</th>
                                    <td>{item.authors?.join(", ") || "Unknown"}</td>
                                </tr>
                                <tr>
                                    <th colSpan={2} className="py-3 text-left">
                                        <button className="px-10 text-sm text-white btn btn-info">
                                            Read Books
                                        </button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Kolom Kanan: Gambar */}
                    <div className="w-1/2 border">
                        <figure>
                            <img
                                src={
                                    item.published_works?.[0]?.cover_art_url ||
                                    "placeholder-image-url"
                                }
                                alt={item.title || "Book cover"}
                                className="object-cover w-1/2 mx-auto"
                            />
                        </figure>
                    </div>
                </div>
            ))}
        </section>
    );
}
