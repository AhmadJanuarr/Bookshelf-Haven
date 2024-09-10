interface FooterHeadingProps {
    title: string;
}
interface FooterListProps {
    items: string[];
}

interface FooterSectionProps {
    heading: string;
    items: string[];
}

function FooterHeading({ title }: FooterHeadingProps) {
    return <h3 className="text-left">{title}</h3>;
}

function FooterList({ items }: FooterListProps) {
    return (
        <ul className="p-0 text-sm list-none text-neutral ">
            {items.map((item, index) => (
                <li key={index} className="hover:text-black">
                    {item}
                </li>
            ))}
        </ul>
    );
}

export function FooterSection({ heading, items }: FooterSectionProps) {
    return (
        <div className="mr-10 prose ">
            <FooterHeading title={heading} />
            <FooterList items={items} />
        </div>
    );
}
function FooterMain() {
    return (
        <div className="flex justify-between w-full px-4 py-8">
            <div className="flex justify-start gap-5 prose">
                <h1 className="">BOOKSHELF HAVEN</h1>
                <div className="prose">
                    <p>Latest blog post</p>
                    <h3>Ready to get started?</h3>
                    <p>
                        Join our community of book lovers at Bookshelf Haven, a place where
                        stories come alive and imaginations thrive.
                    </p>
                </div>
            </div>
        </div>
    );
}
function FooterBottom() {
    return (
        <div className="flex justify-around w-full px-4 py-8 text-neutral">
            <p>© 2024 AMARA. All rights reserved. </p>
            <div className="divider divider-horizontal "></div>
            <div className="flex justify-center gap-5">
                <p>Privacy — Terms</p>
                <p>Cookie Statement</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    );
}
export function Footer() {
    return (
        <footer className="w-full ">
            <span className="absolute left-0 w-full h-[35em] bg-accent -z-20"></span>
            <div className="flex flex-col w-full pt-20 lg:flex-row">
                <FooterMain />
                <div className="divider divider-horizontal "></div>
                <div className="flex justify-center w-full py-8">
                    <FooterSection
                        heading="Product"
                        items={[
                            "E-Books ",
                            "Audiobooks",
                            "Free Books",
                            "New Releases",
                            "Bestsellers",
                            "Book Genres",
                            "Book Reviews",
                        ]}
                    />
                    <FooterSection
                        heading="Company"
                        items={[
                            "About Us",
                            "Careers",
                            "Press",
                            "Blog",
                            "Investor Relations",
                            "Sustainability",
                            "Affiliate Program",
                        ]}
                    />
                    <FooterSection
                        heading="Service"
                        items={[
                            "Customer Support",
                            "Shipping & Returns",
                            "FAQ",
                            "Track Orders",
                            "Gift Cards",
                            "Promotions",
                            "Book Clubs",
                        ]}
                    />
                    <FooterSection
                        heading="About"
                        items={[
                            "Our Story",
                            "Mission & Values",
                            "Meet the Team",
                            "Contact Us",
                            "Terms & Conditions",
                            "Privacy Policy",
                            "Community ",
                        ]}
                    />
                </div>
            </div>
            <FooterBottom />
        </footer>
    );
}
