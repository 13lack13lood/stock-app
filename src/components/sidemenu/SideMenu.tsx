import React from "react";
import SideMenuItem from "./SideMenuItem";

interface Props {
	toggle: boolean;
	setToggle: (toggle: boolean) => void;
}

const SideMenu = ({ toggle, setToggle }: Props) => {
	return (
		<div
			className={`overflow-hidden h-screen bg-bgcolor-primary transition-all ease-in-out duration-300 ${
				toggle ? "w-full sm:w-1/2 lg:w-1/5" : "w-0"
			}`}
		>
			<div className="flex flex-col justify-start pt-5 space-y-5">
				<SideMenuItem
					item={{
						title: "Explore",
						link: "/explore",
						icon: "./explore.svg",
					}}
					setToggle={setToggle}
				></SideMenuItem>
				<SideMenuItem
					item={{
						title: "News",
						link: "/news",
						icon: "./news.svg",
					}}
					setToggle={setToggle}
				></SideMenuItem>
				<SideMenuItem
					item={{
						title: "Portfolio",
						link: "/portfolio",
						icon: "./portfolio.svg",
					}}
					setToggle={setToggle}
				></SideMenuItem>
				<SideMenuItem
					item={{
						title: "Watchlist",
						link: "/watchlist",
						icon: "./watchlist.svg",
					}}
					setToggle={setToggle}
				></SideMenuItem>
			</div>
		</div>
	);
};

export default SideMenu;
