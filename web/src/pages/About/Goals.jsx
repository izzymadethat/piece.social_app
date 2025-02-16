import Timeline from "./Timeline";

const Goals = () => {
	return (
		<section className="flex flex-col items-center justify-center xl:h-[350px] p-16">
			<h2 className="my-8 text-4xl font-bold text-accent-secondary">
				Our Mission
			</h2>
			{/* <Timeline /> */}
			<p className="text-lg text-center">
				It is our goal to help <span className="font-extrabold">1 MILLION</span>{" "}
				people in need by 2030
			</p>
		</section>
	);
};
export default Goals;
