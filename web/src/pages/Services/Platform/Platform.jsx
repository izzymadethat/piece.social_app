import { Button } from "rizzui/button";
import ServiceArticle from "../../../components/ServiceArticle";
import { platformDetails } from "./platform-details";

const Platform = () => {
  return (
    <div>
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
    </div>
  );
};
export default Platform;
