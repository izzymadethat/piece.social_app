import ServiceArticle from "../../../components/ServiceArticle";
import { investmentDetails } from "./investment-details";

const Investing = () => {
  return (
    <div>
      <div>
        <h2 className="mt-6 text-3xl text-center md:text-left">
          Investment Opportunities
        </h2>
      </div>

      <section>
        {investmentDetails.map((service, i) => (
          <ServiceArticle info={service} key={i} />
        ))}
      </section>
    </div>
  );
};
export default Investing;
