import { Button } from "rizzui/button";
import { platformDetails } from "./platform-details";

const Platform = () => {
  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="font-semibold text-accent-secondary text-base/7">
            Our Platform As a Service
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 text-pretty sm:text-5xl lg:text-balance">
            Full-Service Web Portal
          </p>
          <p className="mt-6 text-lg/8">
            Our software will provide a place to <strong>match</strong> up{" "}
            <strong>nonprofits</strong> needing housing with{" "}
            <strong>investors</strong> that will pay for acquiring and
            renovating them to suit the public need with <strong>stable</strong>{" "}
            occupancy
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {platformDetails.map((feature) => (
              <div
                key={feature.heading}
                className="relative flex flex-col lg:pl-16"
              >
                <dt className="font-semibold text-gray-900 text-base/7">
                  {feature.heading}
                </dt>
                <dd className="mt-2 text-gray-600 text-base/7">
                  {feature.detail}
                </dd>
                <Button className="mt-4 lg:w-1/4 lg:self-end" disabled>
                  Coming Soon
                </Button>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export default Platform;

{
  /* <div>
      <div>
        <h2 className="mt-6 text-3xl text-center md:text-left">
          Our Platform As a Service
        </h2>
      </div>

      <section>
        {platformDetails.map((service, i) => (
          <div className="flex flex-col">
            <ServiceArticle info={service} key={i} />
            <div className="mx-6">
              <Button className="w-full" disabled>
                Coming Soon
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div> */
}
