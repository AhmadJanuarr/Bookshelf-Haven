import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


export function CardSkeletonHighlight() {
    return (
        <div className="flex items-center w-full h-screen px-2carousel-item">
            {/* Kolom Kiri: Konten */}
            <div className="w-1/2">
                <h1 className="text-lg font-bold">
                    <Skeleton className="w-[200px] h-[50px]" />
                </h1>
                <table className="mt-2 table-auto border-spacing-y-2.5 border-separate w-full">
                    <tbody>
                        <tr>
                            <th className="w-[10em] text-left">Synopsis:</th>
                            <td><Skeleton className="h-[40px] w-full" count={2} /></td>
                        </tr>
                        <tr>
                            <th className="w-[10em] text-left">Thick:</th>
                            <td><Skeleton className="w-[100px] h-[20px]" /></td>
                        </tr>
                        <tr>
                            <th className="w-[10em] text-left">Language:</th>
                            <td><Skeleton className="w-[100px] h-[20px]" /></td>
                        </tr>
                        <tr>
                            <th className="w-[10em] text-left">Date of issue:</th>
                            <td><Skeleton className="w-[100px] h-[20px]" /></td>
                        </tr>
                        <tr>
                            <th className="w-[10em] text-left">Publisher:</th>
                            <td><Skeleton className="w-[150px] h-[20px]" /></td>
                        </tr>
                        <tr>
                            <th colSpan={2} className="py-2 text-left">
                                <Skeleton className="w-[120px] h-[32px]" />
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Kolom Kanan: Gambar */}
            <div className="w-1/2 mx-auto">
                <figure>
                    <Skeleton className="w-1/2 h-[32em] mx-auto  flex" />
                </figure>
            </div>
        </div>
    )
}