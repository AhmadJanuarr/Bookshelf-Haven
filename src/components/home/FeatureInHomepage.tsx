import { Card, CardWrapper } from "../common/Card";
import { HeaderWithLink } from "../common/HeaderWithLink";
import { CardSkeletonFeature } from "../common/skeleton/CardSkeletonFeature";
import Slider from "react-slick";
import { useFetchBooks } from "../../hooks/useFetchBooks";
import { BooksTypes } from "../../types/BooksTypes";

export function FeatureInHomepage() {
    const { data: books = [], isLoading } = useFetchBooks({
        book_type: "Fiction",
        results_per_page: "25",
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
                }

            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };


    return (
        <section className="w-full pb-24">
            <HeaderWithLink title="Featured Books" subTitle="All Books" />
            {isLoading && <CardSkeletonFeature cards={5} />}
            <Slider {...settings}>
                {books &&
                    books.map((item: BooksTypes, index: number) => {
                        const truncateTitle = item.title.slice(0, 40) + "...";
                        console.log(index)
                        return (
                            <div key={index}>
                                <CardWrapper id={item.work_id}>
                                    <Card
                                        src={item.published_works[0].cover_art_url}
                                        title={truncateTitle}
                                        authors={item.authors!}
                                        binding={item.published_works[0].binding}
                                        copyright={item.copyright}
                                        styleImage="rounded-box 2xl:h-[29em] md:h-[24em] w-full"
                                    />
                                </CardWrapper>
                            </div>

                        );
                    })}
            </Slider>
        </section>
    );
}
