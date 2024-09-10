import Hero from "/public/svg/hero.svg";
export function HeroSection() {
    return (
        <section className="bg-base-200">
            <div className="relative flex items-center justify-end w-full">
                <span className="flex">
                    <Hero />
                </span>
                <div className="absolute w-[60%] left-0">
                    <h1
                        className="text-4xl font-bold leading-normal uppercase "
                    >
                        A Curated Collection of Books for Every Reader: Unlock New Worlds,
                        Ideas, and Adventures
                    </h1>
                    <p className="py-6 w-[32em]">
                        From timeless classics to the latest releases, our library is
                        designed to satisfy your curiosity and ignite your imagination.
                    </p>
                    <button className="px-10 text-sm text-white btn btn-info">Start Reading</button>
                </div>
            </div>
        </section>
    );
}
