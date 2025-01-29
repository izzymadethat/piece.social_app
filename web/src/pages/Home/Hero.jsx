import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"></div>

      <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-xl text-center sm:text-left"
        >
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Nonprofit Housing
            <strong className="block font-extrabold text-accent-secondary">
              {" "}
              Management Solutions.{" "}
            </strong>
          </h1>

          <p className="max-w-lg mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <motion.a
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-accent-secondary hover:bg-green-900 sm:w-auto focus:outline-none"
            >
              Get Started
            </motion.a>

            <motion.a
              initial={{ opacity: 0, x: "100px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              href="/about"
              className="block w-full px-12 py-3 text-sm font-medium rounded shadow bg-background text-foreground hover:text-green-700 active:text-green-800 sm:w-auto"
            >
              About Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
