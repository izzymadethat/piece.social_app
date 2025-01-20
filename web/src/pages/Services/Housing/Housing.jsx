import { serviceDetails } from "./service-details";

const HousingArticle = ({ info }) => {
  return (
    <article className="group">
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{info.heading}</h3>

        <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
          {info.detail}
        </p>
      </div>
    </article>
  );
};

const Housing = () => {
  return (
    <div>
      <div>
        <h2 className="mt-6 text-3xl text-center md:text-left">
          Real Estate Solutions for Non-Profits
        </h2>
      </div>

      <section>
        {serviceDetails.map((service, i) => (
          <HousingArticle info={service} key={i} />
        ))}
      </section>
    </div>
  );
};
export default Housing;
