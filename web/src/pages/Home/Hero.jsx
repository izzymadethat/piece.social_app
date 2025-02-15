import { motion } from "framer-motion";
import { ChartArea, DollarSign, HeartHandshake, Home } from "lucide-react";
const heroServices = [
	{ name: "Property Management", icon: Home },
	{ name: "Investment and Growth", icon: DollarSign },
	{ name: "Nonprofit Solutions", icon: HeartHandshake },
	{ name: "Platform As A Service", icon: ChartArea },
];

const Hero = () => {
	return (
		<section className="" id="home-hero">
			<div className="p-4 bg-slate-200">
				<div className="flex flex-col items-center justify-between px-24 py-16 md:flex-row bg-accent-secondary max-w-[1280px] rounded-lg overflow-hidden shadow-lg mx-auto">
					{/* Info column */}
					<motion.div className="space-y-6 md:w-1/2">
						<h1 className="text-5xl font-bold text-background">
							Innovative{" "}
							<span className="text-accent-primary">Shared Housing</span>{" "}
							Management Solutions
						</h1>
						<p className="text-[#AACBBC]">
							{" "}
							Piece Social provides innovative solutions to transform the way
							you manage shared housing. Our platform streamlines operations,
							enhances resident experience, and maximizes property potential.
						</p>
						<div className="flex gap-4 pt-4">
							<button className="px-8 py-3 font-semibold transition-all duration-300 transform rounded-full shadow-lg bg-accent-primary text-accent-secondary hover:scale-105 hover:shadow-xl">
								View Our Solutions
							</button>
							<button className="px-8 py-3 border-2 border-[#AACBBC] text-white rounded-full font-semibold hover:bg-[#AACBBC] hover:text-[#1A734A] transform hover:scale-105 transition-all duration-300">
								About Us
							</button>
						</div>
					</motion.div>

					{/* Services column */}
					<div className="mt-8 md:w-1/2 md:mt-0 md:ml-4">
						<div className="relative">
							{/* pulsing dots */}
							<div className="absolute w-24 h-24 rounded-full -top-4 -left-4 bg-accent-primary opacity-20 animate-pulse" />
							<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#AACBBC] rounded-full opacity-20 animate-pulse" />
							{/* Services grid*/}
							<div className="relative z-10 p-8 transition-all duration-300 transform bg-white/10 backdrop:blur-sm rounded-2xl hover:scale-105">
								<div className="grid grid-cols-2 gap-4">
									{heroServices.map(({ icon: Icon, name }) => (
										<div key={name} className="p-4 rounded-lg bg-white/20">
											<span className="text-4xl text-accent-primary">
												<Icon />
											</span>
											<h3 className="mt-2 font-semibold text-background">
												{name}
											</h3>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
