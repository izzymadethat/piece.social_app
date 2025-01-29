import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "rizzui/button";

const MobileMenu = ({ Menus }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [clicked, setClicked] = useState(null);
	const toggleMobileMenu = () => {
		setIsOpen(!isOpen);
		setClicked(null);
	};

	const SubMenuSettings = {
		enter: {
			height: "auto",
			overflow: "hidden",
		},
		exit: {
			height: 0,
			overflow: "hidden",
		},
	};
	return (
		<div>
			<button onClick={toggleMobileMenu} className="z-[999] relative">
				{isOpen ? <X /> : <Menu />}
			</button>

			<motion.div
				className="fixed left-0 right-0 w-5/6 h-full p-6 mb-20 overflow-y-auto top-16 backdrop-blur text-background bg-accent-secondary"
				initial={{ x: "-100%" }}
				animate={{ x: isOpen ? "0%" : "-100%" }}
			>
				<ul>
					{Menus?.map(({ name, subMenu, route }, i) => {
						const hasSubMenu = subMenu?.length > 0;
						const isClicked = clicked === i;
						return (
							<li key={name}>
								{hasSubMenu ? (
									<span
										className="relative p-4 rounded-md cursor-pointer flex-center-between hover:bg-background/5"
										onClick={() => setClicked(isClicked ? null : i)}
									>
										{name}
										<ChevronDown
											className={`ml-auto ${isClicked && "rotate-180"}`}
										/>
									</span>
								) : (
									<Link
										to={route || "#"}
										className="relative p-4 rounded-md flex-center-between hover:bg-background/5"
									>
										{name}
									</Link>
								)}

								{hasSubMenu && (
									<motion.ul
										className="ml-5"
										initial="exit"
										animate={isClicked ? "enter" : "exit"}
										variants={SubMenuSettings}
									>
										{subMenu?.map(({ name, icon: Icon, route }) => (
											<li key={name}>
												<Link
													to={route || "#"}
													className="p-2 rounded-md cursor-pointer flex-center hover:bg-white/5 gap-x-2"
												>
													{Icon && <Icon size={17} />}
													<span>{name}</span>
												</Link>
											</li>
										))}
									</motion.ul>
								)}
							</li>
						);
					})}
				</ul>
				<div className="w-full space-y-2 place-content-end lg:hidden">
					<SignInButton>
						<Button
							as="span"
							variant="outline"
							className="bg-primary hover:bg-accent-secondary duration-200 text-background z-[999] relative px-3 py-2 shadow rounded-md flex-center w-full"
						>
							Login
						</Button>
					</SignInButton>

					<SignUpButton>
						<Button
							variant="flat"
							className=" duration-200 hover:text-background z-[999] relative px-3 py-1.5  rounded-xl flex-center"
						>
							Sign up
						</Button>
					</SignUpButton>
				</div>
			</motion.div>
		</div>
	);
};
export default MobileMenu;
