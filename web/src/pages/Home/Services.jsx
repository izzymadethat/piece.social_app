import SectionCard from "../../components/SectionCard";
import { targets } from "../../utils/targets";

const Services = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-7">
      <div className="p-8 lg:col-span-3 flex-center-center lg:p-0">
        <h3 className="text-2xl">
          Piece.Social <br />{" "}
          <span className="text-4xl text-accent-secondary">Services</span>
        </h3>
      </div>
      <div className="flex flex-col lg:col-span-4 lg:flex-row">
        {targets.map((info, i) => (
          <SectionCard info={info} key={i} />
        ))}
      </div>
    </section>
  );
};
export default Services;
