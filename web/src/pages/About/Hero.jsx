import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen space-y-4 overflow-hidden xl:flex-row bg-gradient-to-r from-accent-primary to-to-foreground">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl px-4 space-y-4">
        <motion.h1
          initial={{ opacity: 0, x: "-200px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-5xl text-center md:max-w-96 lg:max-w-2xl"
        >
          We&apos;re a passionate group of people aiming to provide housing.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: "200px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-4 text-lg text-gray-600 md:max-w-96 lg:max-w-2xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugiat
          ad repudiandae nobis aspernatur exercitationem ut reiciendis odit
          dicta itaque deleniti possimus molestiae esse velit.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "-200px" }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 1.2 }}
        className="lg:opacity-60 xl:absolute bottom-48 -right-[calc(50%-180px)] flex justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-3/4 shadow-lg xl:rounded-xl xl:size-2/3"
        />
      </motion.div>
    </section>
  );
};
export default Hero;
