const SectionCard = ({ info }) => {
	return (
		<a href="#" className="relative block bg-black rounded-md group">
			<img
				alt=""
				src={info?.imageUrl}
				className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-50 group-hover:opacity-30"
			/>

			<div className="relative p-4 sm:p-6 lg:p-8">
				<p className="text-sm font-medium tracking-widest uppercase text-accent-primary">
					View Solutions for
				</p>

				<p className="text-xl font-bold text-white font-heading sm:text-3xl">
					{info?.target}
				</p>

				<div className="mt-32 sm:mt-48 lg:mt-64">
					<div className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
						<p className="text-sm text-white">{info.summary}</p>
					</div>
				</div>
			</div>
		</a>
	);
};
export default SectionCard;
