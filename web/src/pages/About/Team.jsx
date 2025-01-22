import { ourTeam } from "./about-details";
const Team = () => {
  return (
    <section className="flex flex-col justify-center w-full min-h-screen p-32 ">
      {/* Heading */}
      <div>
        <h2 className="text-4xl">Our Team</h2>
        <p className="lg:max-w-96">
          Our diverse team has many decades of experience in software
          development, over 10,000 real estate transactions, and $100m in
          nonprofit funding.
        </p>
      </div>

      {/* Team info */}
      <div className="grid items-center self-center w-full max-w-4xl grid-cols-1 gap-12 p-8 rounded-lg lg:grid-cols-3">
        {ourTeam.map((person, i) => (
          <div className="flex flex-col items-center gap-2">
            {/* Person Image */}
            <div>
              <img
                src={`https://placehold.co/300x300?text=${person.name}`}
                alt=""
                className="border-[16px] rounded-full border-accent-secondary"
              />
            </div>
            {/* Person info and title */}
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-extrabold">{person.name}</h3>
              <span className="text-lg">{person.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;
