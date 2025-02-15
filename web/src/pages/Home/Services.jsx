import { MotionConfig, motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionCard from "../../components/SectionCard";
import { targets } from "../../utils/targets";

const Services = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<section ref={ref} className="grid grid-cols-1 px-4 py-16 lg:grid-cols-3">
			<MotionConfig transition={{ duration: 1.3, ease: "backInOut" }}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
					className="p-8 flex-center-center lg:p-0 lg:order-2"
				>
					<h3 className="text-2xl text-center">
						Piece.Social <br />{" "}
						<span className="text-4xl text-accent-secondary">Solutions</span>
					</h3>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: "-200px" }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					className="flex flex-col rounded-lg lg:flex-row lg:order-1"
				>
					<SectionCard info={targets[0]} />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: "200px" }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					className="flex flex-col rounded-lg lg:flex-row lg:order-3"
				>
					<SectionCard info={targets[1]} />
				</motion.div>
			</MotionConfig>
		</section>
	);
};
export default Services;
