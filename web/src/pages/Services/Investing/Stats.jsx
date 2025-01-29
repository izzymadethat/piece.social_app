import { stats } from "./investment-details";

const Stats = () => {
	return (
		<div className="relative">
			<div className="absolute w-2/3 px-8 py-3 -translate-x-1/2 rounded-lg shadow-md bg-accent-secondary -top-8 left-1/2">
				<h2 className="text-lg text-accent-primary">Predictable ROI</h2>
				<p className="text-xs text-background">
					For <strong>each</strong> new property that we source and match to
					qualifying <strong>nonprofit</strong> organizations, we estimate the
					following <strong>revenue:</strong>
				</p>
			</div>
			<div class="bg-gradient-to-br from bg-accent-primary to-white/60 py-24 sm:py-32">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
						<div class="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt class="text-base/7 text-gray-600">
								One-time transactions fee
							</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
								30,000
							</dd>
						</div>
						<div class="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt class="text-base/7 text-gray-600">
								Monthly nonprofit property services
							</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
								1,000
							</dd>
						</div>
						<div class="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt class="text-base/7 text-gray-600">
								Monthly nonprofit program services
							</dt>
							<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
								2,000
							</dd>
						</div>
					</dl>
				</div>
			</div>

			<div className="py-4 shadow-md bg-accent-secondary">
				{stats.map((stat, i) => (
					<div key={i} className="flex justify-center gap-4 font-semibold">
						<p>
							{stat.portfolioYear} Portfolio:{" "}
							<span className="font-extrabold text-background">
								{stat.houses}
							</span>
						</p>
						<p>
							Estimated Revenue:{" "}
							<span className="font-bold text-background">
								${stat.estimatedRevenue.toString().slice(0, 3)},
								{stat.estimatedRevenue.toString().slice(3)}
							</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default Stats;
