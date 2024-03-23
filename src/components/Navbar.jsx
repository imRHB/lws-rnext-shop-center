import Image from "next/image";
import Link from "next/link";

const menu = "/assets/svg/menu.svg";
const logo = "/assets/lws-logo-black.svg";
const avatar = "/assets/svg/avatar.svg";
const cart = "/assets/svg/shopping-Cart.svg";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-11/12 py-5 mx-auto lg:w-10/12 max-w-7xl lg:py-6">
            <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
                <div className="flex items-center gap-2">
                    <Image
                        src={menu}
                        height={40}
                        width={120}
                        className="w-5 h-5 lg:hidden"
                        alt="Menu"
                    />
                    <Link href="/">
                        <Image
                            src={logo}
                            height={40}
                            width={120}
                            className="h-10"
                            alt="LWS Shop Center"
                        />
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
                <Image
                    src={avatar}
                    height={18}
                    width={18}
                    className="hidden lg:block w-[18px] h-[18px]"
                    alt="login account avatar"
                />
                <Image
                    src={cart}
                    height={20}
                    width={20}
                    className="block w-5 h-5"
                    alt="shopping cart icon"
                />
            </div>
        </nav>
    );
}
