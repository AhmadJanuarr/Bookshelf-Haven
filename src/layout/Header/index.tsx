import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import Logo from "../../../public/logo.svg";
function HeaderTop() {
    return (
        <div className="flex items-center w-full gap-5">
            <div className="flex items-center w-full">
                <span className="pr-5 font-bold text-md max-w-28">
                    <p>Bookshelf Haven</p>
                </span>

                <label className="input input-bordered  input-sm flex w-full max-w-[80%] justify-between p-0 overflow-hidden ">
                    <input
                        type="text"
                        placeholder="Search by Title, Author, Keyword"
                        className="w-full pl-8"
                    />
                    <button className="px-3 text-white bg-primary ">
                        <SearchOutlinedIcon />
                    </button>
                </label>
            </div>
            <div className="flex gap-4 item">
                <span>EN</span>
                <span>
                    <AccountCircleOutlinedIcon />
                </span>
                <span>
                    <FavoriteBorderOutlinedIcon />
                </span>
            </div>
        </div>
    );
}

function HeaderBottom() {
    return (
        <div className="w-full py-5 ">
            <ul className="flex gap-5">
                <li>Categories</li>
                <li>Books</li>
                <li>Best Seller</li>
                <li>About Us</li>
                <li>Membership</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
}

export function Header() {
    return (
        <header className="flex flex-col navbar">
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
}
