import { resources } from "../../utils/resources";

const Resources = () => {
	return (
		<section className="py-12 bg-accent-secondary">
			<div className="container px-6 mx-auto">
				<h2 className="mb-8 text-4xl font-bold text-center text-background">
					Resources
				</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{resources.map((resource) => (
						<div
							key={resource.id}
							className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
						>
							<h3 className="text-xl font-semibold text-center text-gray-800">
								{resource.title}
							</h3>
							<p className="mt-2 text-center text-gray-600">
								{resource.description}
							</p>
							<a
								href={resource.link}
								className="block mt-4 font-medium text-center text-primary-500 hover:underline"
							>
								Learn More
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Resources;
