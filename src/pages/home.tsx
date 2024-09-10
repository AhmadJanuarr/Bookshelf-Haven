import { HeroSection } from "../components/home/HeroSection";
import { CategoriesInHomepage } from "../components/home/CategoriesInHomepage";
import { Header } from "../layout/Header";
import { FeatureInHomepage } from "../components/home/FeatureInHomepage";
import { HighlightBookCard } from "../components/home/HighlightBookCard";
import { LatestBooks } from "../components/home/LatestBooks";
import { BooksSubscribe } from "../components/home/BooksSubscribe";
import { Testimonial } from "../components/home/Testimonials";
import { Footer } from "../layout/Footer";

export function HomePage() {
    return (
        <div className="container mx-auto font-inter">
            <Header />
            <HeroSection />
            <CategoriesInHomepage />
            <FeatureInHomepage />
            <HighlightBookCard />
            <LatestBooks />
            <BooksSubscribe />
            <Testimonial />
            <Footer />
        </div>
    )
}