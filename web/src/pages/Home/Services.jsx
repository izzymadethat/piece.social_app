import SectionCard from "../../components/SectionCard";
import { targets } from "../../utils/targets";

const Services = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-7">
      <div className="lg:col-span-1 flex-center-center p-8 lg:p-0">
        <h3 className="text-2xl">
          Piece.Social <br />{" "}
          <span className="text-accent-secondary text-4xl">Services</span>
        </h3>
      </div>
      <div className="lg:col-span-6 flex flex-col lg:flex-row">
        {targets.map((info, i) => (
          <SectionCard info={info} key={i} />
        ))}
      </div>
    </section>
  );
};
export default Services;
