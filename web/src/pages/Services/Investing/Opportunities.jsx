import ServiceArticle from "../../../components/ServiceArticle";
import { investmentDetails } from "./investment-details";

const Opportunities = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-8 bg-right bg-cover"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1674646022401-6b8bcae30506?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-accent-primary bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="mt-6 text-3xl text-center md:text-left">
          Investment Opportunities
        </h2>
        <p className="flex items-center w-full gap-8 mt-2 ">
          <span className="w-1/4 h-2 bg-foreground"></span>
          <span className="font-semibold">Diversified, low risk options</span>
        </p>
      </div>

      <section className="relative z-10">
        {investmentDetails.map((service, i) => (
          <ServiceArticle info={service} key={i} />
        ))}
      </section>
    </div>
  );
};
export default Opportunities;
