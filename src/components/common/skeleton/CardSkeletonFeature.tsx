import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function CardSkeletonFeature({ cards }: { cards: number }) {
    return (
        <div className="container flex justify-center gap-4">
            {Array(cards).fill(0).map((_, i) => (
                <div key={i}>
                    <figure className="cursor-pointer">
                        <Skeleton

                            className="rounded-box w-[15em] h-[24em] 2xl:w-[20em] 2xl:h-[29em]"
                        />
                    </figure>
                    <div className="flex flex-col justify-between py-4">
                        <div className="card-normal">
                            <Skeleton
                                height={34}
                                className="mb-4"
                            />
                            <div className="flex space-x-2">
                                <Skeleton
                                    width={96}
                                    height={16}
                                />
                                <Skeleton
                                    width={96}
                                    height={16}
                                />
                            </div>
                            <Skeleton
                                height={20}
                            />
                        </div>
                        <div className="flex items-center justify-start mt-3 card-actions">
                            <Skeleton
                                width={96}
                                height={32}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
