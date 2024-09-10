import Subscribe from "/public/svg/subscribe.svg"
import People from "/public/svg/people.svg"
export function BooksSubscribe() {
    return (
        <section className="flex items-center justify-center w-full h-[42em] ">
            <span className="absolute left-0 w-full h-[42em] bg-accent -z-20"></span>
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-col justify-center w-1/2 prose">
                    <People />
                    <h1>We are adding more interesting books to our collection.</h1>
                    <p>Don't miss our latest and special books. Don't miss out on our latest and special books. a Subscribe now to get instant notifications when your favorite books are available!</p>
                    <div className="w-full pt-10 join">
                        <input type="text" placeholder="Enter your email" className="w-full input join-item focus:outline-none" />
                        <button className="text-white bg-black btn join-item btn-primary">Subscibe</button>
                    </div>
                </div>
                <div className="flex justify-center w-1/2">
                    <Subscribe />
                </div>
            </div>
        </section>
    )
}