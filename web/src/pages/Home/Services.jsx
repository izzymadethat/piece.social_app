import SectionCard from "../../components/SectionCard";
import { targets } from "../../utils/targets";

const Services = () => {
  return (
    <section className="grid grid-cols-1 px-4 pb-16 lg:grid-cols-3">
      <div className="p-8 flex-center-center lg:p-0 lg:order-2">
        <h3 className="text-2xl">
          Piece.Social <br />{" "}
          <span className="text-4xl text-accent-secondary">Services</span>
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row lg:order-1">
        <SectionCard info={targets[0]} />
      </div>
      <div className="flex flex-col lg:flex-row lg:order-3">
        <SectionCard info={targets[1]} />
      </div>
    </section>
  );
};
export default Services;
