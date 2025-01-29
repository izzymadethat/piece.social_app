const Values = () => {
	return (
		<section className="flex flex-col items-center justify-center h-screen px-8 bg-gray-50">
			<div className="max-w-4xl text-center">
				<h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
				<p className="mt-4 text-lg text-gray-600">
					Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
					quis lectus nulla at volutpat diam ut venenatis.
				</p>
			</div>
			<div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
				<div className="text-center">
					<h3 className="text-xl font-semibold text-gray-900">
						Customer First
					</h3>
					<p className="text-gray-600">
						Adipiscing elit integer malesuada nunc vel risus commodo viverra.
					</p>
				</div>
				<div className="text-center">
					<h3 className="text-xl font-semibold text-gray-900">Transparency</h3>
					<p className="text-gray-600">
						Faucibus scelerisque eleifend donec pretium vulputate sapien nec
						sagittis.
					</p>
				</div>
				<div className="text-center">
					<h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
					<p className="text-gray-600">
						Est velit egestas dui id ornare arcu odio ut sem nulla pharetra
						diam.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Values;
