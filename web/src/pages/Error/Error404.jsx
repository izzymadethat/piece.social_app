import { BookOpen, DollarSign, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const LinkItem = ({ icon, title, description, to }) => (
	<Link
		to={to}
		className="flex items-center gap-4 p-4 transition bg-white border-b rounded-lg shadow hover:shadow-md hover:bg-gray-100 border-b-gray-300"
	>
		<div className="text-accent-secondary">{icon}</div>
		<div>
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="text-sm text-gray-500">{description}</p>
		</div>
	</Link>
);

const Error404 = () => {
	return (
		<div className="container absolute flex flex-col max-w-2xl mx-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
			<h1 className="font-semibold text-center text-accent-secondary text-lg/7">
				404
			</h1>

			<h2 className="mb-6 text-4xl font-bold tracking-tight text-center text-gray-900 font-body text-pretty sm:text-5xl lg:text-balance">
				Uh-Oh! It seems this page doesn't exist
			</h2>
			<p className="text-lg text-center">
				Hopefully, you can find what you're looking for with these links.
			</p>

			<div className="self-center w-full mt-8 space-y-2">
				<LinkItem
					title="About Us"
					to="/about"
					icon={<User2 />}
					description="Learn more about Piece.Social"
				/>
				<LinkItem
					title="Investor Network - Coming Soon"
					to="#"
					icon={<DollarSign />}
					description="Visit our Investor Network"
				/>
				<LinkItem
					title="Our Blog - Coming Soon"
					to="#"
					icon={<BookOpen />}
					description="Questions? We may have an article on it!"
				/>
			</div>
			<Link
				to="/"
				className="flex items-center mt-8 text-sm text-accent-secondary hover:underline"
			>
				&larr; Back to home
			</Link>
		</div>
	);
};
export default Error404;
