import { motion } from "framer-motion";
import { ourTeam } from "./about-details";
const Team = () => {
  return (
    <section className="flex flex-col justify-center w-full min-h-screen p-20">
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
      <div className="grid items-center self-center max-w-4xl grid-cols-1 gap-12 p-8 rounded-lg w-fit lg:grid-cols-3">
        {ourTeam.map((person, i) => (
          // Hoverable Image Card
          <motion.div
            key={i}
            whileHover="hover"
            className="relative flex flex-col items-center gap-2 overflow-hidden rounded-md shadow-xl cursor-pointer md:flex-row"
          >
            {/* Person Image */}
            <figure className="w-full md:w-auto">
              <img
                src={person.imgUrl}
                alt=""
                className={`w-[300px] object-cover aspect-[1/1] rounded-t-md ${
                  person.imgUrl.includes("adrian") && "scale-150 translate-y-14"
                }`}
              />
            </figure>
            {/* Person info and title */}
            <motion.div
              className="absolute bottom-0 left-0 flex flex-col items-center w-full p-4 text-center shadow-md md:hidden lg:flex bg-background"
              initial={{ y: "100%", opacity: 0 }}
              variants={{
                hover: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeOut" }
                },
                exit: {
                  y: "100%",
                  opacity: 0,
                  transition: { duration: 0.3, ease: "easeIn" }
                }
              }}
            >
              <h3 className="text-xl font-extrabold">{person.name}</h3>
              <h4 className="text-lg font-body">{person.title}</h4>
              <div className="flex items-center mt-4">Social Media Icons</div>
            </motion.div>
            <div className="flex-col hidden w-full px-16 md:flex lg:hidden">
              <h3 className="text-4xl font-extrabold">{person.name}</h3>
              <h4 className="text-lg font-body">{person.title}</h4>
              <div className="flex items-center mt-4">Social Media Icons</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Team;
