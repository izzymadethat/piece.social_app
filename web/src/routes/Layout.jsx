import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
	const pathname = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<div>
			<Header />
			<div>
				<Outlet />
			</div>
		</div>
	);
};
export default Layout;
