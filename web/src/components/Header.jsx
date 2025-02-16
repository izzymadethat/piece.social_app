import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "rizzui";
import { Menus } from "../utils/menu";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
	return (
		<header className="h-16 text-[15px] flex-center sticky inset-0 bg-accent-primary shadow-sm z-[1000]">
			<nav className="px-3.5 w-full flex-center-between mx-auto">
				<Link to={"/"} className=" z-[999] relative">
					<img src="/piece-logo.svg" className="size-28" alt="Piece Logo" />
				</Link>

				{/* Desktop menu */}
				<ul className="hidden lg:flex-center gap-x-1">
					{Menus.map((menu) => (
						<DesktopMenu menu={menu} key={menu.name} />
					))}
				</ul>
				<div className="hidden lg:flex-center gap-x-2">
					<SignInButton>
						<Button
							as="span"
							variant="outline"
							className="px-10 py-3 font-semibold transition-all duration-300 transform border-none rounded-full shadow-lg cursor-pointer bg-accent-secondary text-accent-primary hover:scale-105 hover:shadow-xl hover:text-accent-primary"
						>
							Login
						</Button>
					</SignInButton>
				</div>

				{/* Mobile Nav */}
				<div className="lg:hidden">
					<MobileMenu Menus={Menus} />
				</div>
			</nav>
		</header>
	);
};
export default Header;
