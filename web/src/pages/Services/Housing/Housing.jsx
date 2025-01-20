import ServiceArticle from "../../../components/ServiceArticle";
import { serviceDetails } from "./service-details";

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
          <ServiceArticle info={service} key={i} />
        ))}
      </section>
    </div>
  );
};
export default Housing;
