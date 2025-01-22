const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen space-y-4 overflow-hidden lg:flex-row bg-gradient-to-r from-accent-primary to-to-foreground">
      <div className="w-full max-w-5xl px-4 space-y-4">
        <h1 className="text-5xl md:max-w-96 lg:max-w-2xl">
          We&apos;re a passionate group of people aiming to provide housing.
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:max-w-96 lg:max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugiat
          ad repudiandae nobis aspernatur exercitationem ut reiciendis odit
          dicta itaque deleniti possimus molestiae esse velit.
        </p>
      </div>
      <div className="px-4 lg:opacity-60 lg:absolute bottom-48 -right-[calc(50%-20px)] ">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="shadow-lg rounded-xl lg:size-2/3"
        />
      </div>
    </section>
  );
};
export default Hero;
