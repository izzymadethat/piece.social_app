import ServiceArticle from "../../../components/ServiceArticle";
import { investmentDetails } from "./investment-details";

const Opportunities = () => {
	return (
		<div
			className="relative flex flex-col items-center justify-center min-h-screen px-8 py-24 bg-right bg-cover sm:py-32 "
			style={{
				backgroundImage:
					"url('https://plus.unsplash.com/premium_photo-1674646022401-6b8bcae30506?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-opacity-80 bg-[#C4C5C3] backdrop-blur-sm"></div>
			<div className="z-30 px-6 mx-auto max-w-7xl lg:px-8">
				<div className="max-w-2xl mx-auto lg:text-center">
					<h2 className="font-semibold text-accent-secondary text-xl/7">
						Opportunities
					</h2>
					<p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl lg:text-balance">
						Real Estate Solutions for Non-Profits
					</p>
					<p className="mt-6 text-lg/8 0">
						We not only help nonprofits with <strong>finding</strong> and
						setting up their <strong>property</strong>, we also facilitate{" "}
						<strong>long-term funding</strong> to continue to provide{" "}
						<strong>safe</strong> housing for the nonprofit and its clients.
					</p>
				</div>
				<div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{investmentDetails.map((feature) => (
							<div key={feature.heading} className="relative lg:pl-16">
								<dt className="flex flex-col font-semibold text-gray-900 text-base/7">
									{feature.heading}
									{feature.headline && (
										<span className="my-2 text-sm italic text-gray-600">
											{feature.headline}
										</span>
									)}
								</dt>
								<dd
									className="mt-2 text-base/7"
									dangerouslySetInnerHTML={{ __html: feature.detail }}
								/>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};
export default Opportunities;

// {/* <div
// className="relative flex flex-col items-center justify-center min-h-screen px-8 bg-right bg-cover"
// style={{
//   backgroundImage:
//     "url('https://plus.unsplash.com/premium_photo-1674646022401-6b8bcae30506?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
// }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-accent-primary bg-opacity-80"></div>

//       {/* Content */}
//       <div className="relative z-10">
//         <h2 className="mt-6 text-3xl text-center md:text-left">
//           Investment Opportunities
//         </h2>
//         <p className="flex items-center w-full gap-8 mt-2 ">
//           <span className="w-1/4 h-2 bg-foreground"></span>
//           <span className="font-semibold">Diversified, low risk options</span>
//         </p>
//       </div>

//       <section className="relative z-10">
//         {investmentDetails.map((service, i) => (
//           <ServiceArticle info={service} key={i} />
//         ))}
//       </section>
//     </div> */}
