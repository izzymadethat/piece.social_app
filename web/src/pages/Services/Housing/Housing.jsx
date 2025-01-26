import { serviceDetails } from "./service-details";

const Housing = () => {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="font-semibold text-accent-secondary text-xl/7">
            Housing
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
            {serviceDetails.map((feature) => (
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
export default Housing;

{
  /* <div>
  <div>
    <h2 className="mt-6 text-3xl text-center md:text-left">
      Real Estate Solutions for Non-Profits
    </h2>
  </div>

  <section>
    {serviceDetails.map((service, i) => (
      <ServiceArticle info={service} key={i} />
    ))}
  </section>
</div>; */
}
