import { Button } from "rizzui/button";
import { platformDetails } from "./platform-details";

const Platform = () => {
	return (
		<div className="py-24 bg-white sm:py-32">
			<div className="px-6 mx-auto max-w-7xl lg:px-8">
				<div className="max-w-2xl mx-auto lg:text-center">
					<p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 font-heading sm:text-5xl lg:text-balance">
						Full-Service Web Portal
					</p>
					<p className="mt-6 text-lg/8">
						Text goes here to describe the platform the Piece will provide for
						full housing management solutions.
					</p>
				</div>
				<div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{platformDetails.map((feature) => (
							<div
								key={feature.heading}
								className="relative flex flex-col lg:pl-16"
							>
								<dt className="font-semibold text-gray-900 text-base/7">
									{feature.heading}
								</dt>
								<dd className="mt-2 text-gray-600 text-base/7">
									{feature.detail}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};
export default Platform;
