const WhatIsPieceSocial = () => {
  return (
    <div className="flex items-center justify-center bg-accent-primary">
      <div className="flex flex-col-reverse overflow-hidden shadow-md lg:flex-row">
        {/* Left content */}
        <div className="p-8 lg:w-2/3 ">
          <div className="mb-6">
            <h2 className="mb-4 text-3xl font-extrabold">
              What is{" "}
              <span className="text-accent-secondary">Piece Social?</span>
            </h2>
          </div>
          <h2 className="mb-4 text-2xl font-extrabold">
            Nonprofits Need Housing Help
          </h2>
          <p className="text-lg">
            There are <span className="font-bold">thousands</span> of nonprofits
            that <span className="font-bold">already</span> have the
            programmatic funding to be able to{" "}
            <span className="font-bold">provide services</span>, but nonprofits
            have specific <span className="font-bold">struggles</span> in
            obtaining mortgages and locating{" "}
            <span className="font-bold">suitable</span> properties.
          </p>
          <div className="gap-4 mt-6 flex-center">
            <div className="bg-[#1C5C3B] text-white font-bold py-2 px-4 rounded w-full lg:max-w-80 shadow-md pointer-events-none">
              This is where Piece steps in to help...
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Housing"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
export default WhatIsPieceSocial;
