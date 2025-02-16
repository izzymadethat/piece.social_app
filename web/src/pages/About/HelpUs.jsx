import { Link } from "react-router-dom";
import { waysToHelp } from "./about-details";

const HelpUs = () => {
	return (
		<section className="p-12 bg-background">
			<div className="container px-4 mx-auto">
				{/* Title */}
				<h2 className="text-4xl font-bold text-gray-800">
					Help Us Make a Difference
				</h2>
				<p className="max-w-2xl mb-8">
					There are many ways to support our cause. Choose the one that works
					best for you and help us create a better tomorrow.
				</p>

				{/* Ways to Help Cards */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-background">
					<Link className="p-8 bg-[#1A734A] transform hover:scale-95 transition-all rounded-lg shadow-md hover:shadow-lg">
						<div className="mb-4 text-5xl">{waysToHelp[0].icon}</div>
						<h3 className="mt-4 text-2xl font-bold">{waysToHelp[0].title}</h3>
						<p className="mt-2">{waysToHelp[0].description}</p>
					</Link>
					<Link className="p-8 bg-[#AACBBC] transform hover:scale-95 transition-all rounded-lg shadow-md hover:shadow-lg text-primary">
						<div className="mb-4 text-5xl">{waysToHelp[1].icon}</div>
						<h3 className="mt-4 text-2xl font-bold">{waysToHelp[1].title}</h3>
						<p className="mt-2">{waysToHelp[1].description}</p>
					</Link>
					<Link className="p-8 bg-[#EEE3A9] transform hover:scale-95 transition-all rounded-lg shadow-md hover:shadow-lg text-primary">
						<div className="mb-4 text-5xl">{waysToHelp[2].icon}</div>
						<h3 className="mt-4 text-2xl font-bold">{waysToHelp[2].title}</h3>
						<p className="mt-2">{waysToHelp[2].description}</p>
					</Link>
				</div>
			</div>
		</section>
	);
};
export default HelpUs;
