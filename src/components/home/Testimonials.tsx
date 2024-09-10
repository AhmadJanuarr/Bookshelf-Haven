import { TestimonialsTypes } from "../../types/TestimonialsTypes";
import { TestimonialsCard } from "../common/TestimonialCard";
import Testimonials from "./../../data/Testimonials";
import Slider from "react-slick";

export function Testimonial() {
    const setting = {
        infinite: true,
        centerPadding: "60px",
        autoplay: true,
        onmouseover: true,
        slidesToShow: 4,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="flex flex-col items-center justify-center pt-16 overflow-x-hidden ">
            <div className="prose text-center">
                <h1>What Do They Say About Us?</h1>
                <p>
                    Listen to the experiences of our customers who have experienced our
                    services/products.
                </p>
            </div>
            <div className="w-full py-10 ">
                <Slider {...setting}>
                    {Testimonials &&
                        Testimonials.map((item: TestimonialsTypes) => {
                            return (
                                <div key={item.id}>
                                    <TestimonialsCard
                                        id={item.id}
                                        message={item.message}
                                        name={item.name}
                                        job={item.job}
                                        image={item.image}
                                        color={item.color}
                                    />
                                </div>
                            );
                        })}
                </Slider>
            </div>
        </section>

    );
}
