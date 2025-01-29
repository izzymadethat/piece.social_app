import { Link } from "react-router-dom";
import { waysToHelp } from "./about-details";

const HelpUs = () => {
	return (
		<section className="py-12 bg-accent-primary">
			<div className="container px-4 mx-auto text-center">
				{/* Title */}
				<h2 className="mb-6 text-3xl font-bold text-gray-800">
					Help Us Make a Difference
				</h2>
				<p className="max-w-2xl mx-auto mb-8 ">
					There are many ways to support our cause. Choose the one that works
					best for you and help us create a better tomorrow.
				</p>

				{/* Ways to Help Cards */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{waysToHelp.map((way, index) => (
						<Link
							key={index}
							className="p-6 transition-shadow bg-white shadow-md rounded-2xl hover:shadow-lg"
						>
							<div className="text-5xl">{way.icon}</div>
							<h3 className="mt-4 text-xl font-semibold text-gray-800">
								{way.title}
							</h3>
							<p className="mt-2 text-gray-600">{way.description}</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};
export default HelpUs;
