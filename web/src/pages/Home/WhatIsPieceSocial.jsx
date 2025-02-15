import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhatIsPieceSocial = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true }); // Trigger view on scroll once
	return (
		<section
			className="relative flex items-center justify-center mx-auto bg-accent-secondary"
			ref={ref}
		>
			<img
				src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
				alt="Modern apartment building"
				className="w-full h-[400px] object-cover opacity-40 blur-sm"
			/>

			<div className="absolute inset-0 bg-gradient-to-r max-w-[680px] mx-auto from-[#bfdbd0]/90 to-[#bfdbd0]/80 px-8 py-12 my-12 rounded-lg">
				<div className="max-w-[600px]">
					<h2 className="mb-4 text-4xl font-bold">
						What is <span className="text-accent-secondary">Piece?</span>
					</h2>

					<div className="p-8 transition-all duration-300 ease-in-out transform rounded-lg shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1">
						<h3 className="mb-4 text-xl font-semibold">
							Nonprofits Need Housing Help
						</h3>

						<p className="leading-relaxed text-gray-700">
							There are <span className="font-medium">thousands</span> of
							nonprofits that <span className="font-medium">already</span> have
							the programmatic funding to be able to{" "}
							<span className="font-medium">provide services</span>, but
							nonprofits have specific{" "}
							<span className="font-medium">struggles</span> in obtaining
							mortgages and locating{" "}
							<span className="font-medium">suitable</span> properties
							<p className="my-4 text-2xl font-heading">
								This is where{" "}
								<span className="font-bold text-accent-secondary">Piece</span>{" "}
								steps in to help...
							</p>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default WhatIsPieceSocial;
