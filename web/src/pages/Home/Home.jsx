import Hero from "./Hero";
import Problem from "./Problem";
import Resources from "./Resources";
import Services from "./Services";
import WhatIsPieceSocial from "./WhatIsPieceSocial";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* What is Piece Social? */}
      <WhatIsPieceSocial />
      {/* The Current Problem */}
      <Problem />
      {/* Services */}
      <Services />
      {/* Resources */}
      <Resources />
    </main>
  );
};
export default Home;
