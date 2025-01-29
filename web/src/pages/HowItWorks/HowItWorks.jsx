const HowItWorks = () => {
	return (
		<div className="flex flex-col items-center p-8">
			{/* Hero Section */}
			<header className="mb-12 text-center">
				<h1 className="text-4xl font-bold text-gray-800">How It Works</h1>
				<p className="mt-4 text-lg text-gray-600">
					Discover how Piece.Social connects investors, nonprofits, and
					benefactors to provide stable housing for social causes.
				</p>
			</header>

			{/* Content Sections */}
			<section className="max-w-4xl space-y-16">
				{/* Platform Overview */}
				<div>
					<h2 className="text-2xl font-semibold text-gray-800">
						Platform Overview
					</h2>
					<p className="mt-2 text-gray-600">
						A comprehensive platform bridging the gap between investors and
						nonprofits to create sustainable housing solutions.
					</p>
				</div>

				{/* Step-by-Step Process */}
				<div>
					<h2 className="text-2xl font-semibold text-gray-800">
						Step-by-Step Process
					</h2>
					<p className="mt-2 text-gray-600">
						Learn how Piece.Social connects investors with nonprofits to secure
						housing solutions for those in need.
					</p>
				</div>

				{/* Investors Section */}
				<div>
					<h2 className="text-2xl font-semibold text-gray-800">Investors</h2>
					<p className="mt-2 text-gray-600">
						Get involved in providing housing for social causes. Support
						impactful projects and make a difference.
					</p>
				</div>

				{/* Nonprofits Section */}
				<div>
					<h2 className="text-2xl font-semibold text-gray-800">Nonprofits</h2>
					<p className="mt-2 text-gray-600">
						Secure housing for your beneficiaries through our platform. Learn
						how Piece.Social works for you.
					</p>
				</div>

				{/* Benefactors Section */}
				<div>
					<h2 className="text-2xl font-semibold text-gray-800">Benefactors</h2>
					<p className="mt-2 text-gray-600">
						Support housing projects and ensure continued funding for programs
						that matter.
					</p>
				</div>

				{/* Long-Term Commitment */}
				<div>
					<h2 className="text-2xl font-semibold text-gray-800">
						Long-Term Commitment
					</h2>
					<p className="mt-2 text-gray-600">
						Our commitment to securing stable housing ensures nonprofits have
						reliable tenancy.
					</p>
				</div>

				{/* Housing Management */}
				<div>
					<h2 className="text-2xl font-semibold text-gray-800">
						Housing Management
					</h2>
					<p className="mt-2 text-gray-600">
						Piece.Social handles buying, holding, and managing properties to
						ensure seamless housing solutions.
					</p>
				</div>
			</section>

			{/* Call to Action */}
			<footer className="mt-16">
				<button className="px-6 py-3 text-white rounded-lg bg-accent-secondary ">
					Get Started
				</button>
			</footer>
		</div>
	);
};

export default HowItWorks;
