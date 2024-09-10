import { useFetchBooks } from "../../hooks/useFetchBooks";
import { BooksTypes } from "../../types/BooksTypes";
import { Card, CardWrapper } from "../common/Card";
import { HeaderWithLink } from "../common/HeaderWithLink";
import { CardSkeletonLatest } from "../common/skeleton/CardSkeletonLatest";

export function LatestBooks() {

    let result_per_page = ""
    if (window.innerWidth > 1400) {
        result_per_page = "10";
    } else {
        result_per_page = "8";
    }


    const { data: books = [], isLoading } = useFetchBooks({
        categories: "Science Fiction & Fantasy",
        results_per_page: result_per_page,
    });

    return (
        <section className="w-full">
            <HeaderWithLink title="Latest Books" subTitle="All Books" />
            <div className="flex flex-wrap justify-center w-full gap-4 " >
                {isLoading && <CardSkeletonLatest cards={8} />}
                {books &&
                    books.map((item: BooksTypes, index: number) => {
                        return (
                            <div key={
                                index
                            }>
                                <CardWrapper id={item.work_id} className="2xl:w-[313px]">
                                    <Card
                                        src={item.published_works[0].cover_art_url}
                                        title={item.title}
                                        authors={item.authors!}
                                        binding={item.published_works[0].binding}
                                        copyright={item.copyright}
                                        styleImage="2xl:h-[29em] md:h-[24em] md:w-[18em] 2xl:w-[20em] rounded-box"
                                    />
                                </CardWrapper>

                            </div>

                        );
                    })}
            </div>
            <div className="flex justify-center w-full py-10">
                <button className="text-white px-14 text-md btn btn-info ">View All</button>
            </div>
        </section>
    );
}
