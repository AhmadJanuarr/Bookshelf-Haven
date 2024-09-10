import { Categories } from "../../data/Categories";
import { HeaderWithLink } from "../common/HeaderWithLink";
export function CategoriesInHomepage() {
    return (
        <section className="flex flex-col justify-center w-full gap-3 py-24">
            <HeaderWithLink title="Categories List" subTitle="All Categories" />
            <div className="flex gap-4">
                {Categories &&
                    Categories.map((item) => (
                        <div className="relative shadow-xl card-normal card hover:opacity-90 " key={item.id}>
                            <figure>
                                <img
                                    src={item.image}
                                    className="w-64 h-[369px] rounded-xl" />
                            </figure>
                            <div className="absolute inset-0 flex items-end justify-center">
                                <h2 className="font-bold text-white card-title">{item.categories}</h2>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
