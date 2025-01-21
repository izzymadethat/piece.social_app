import Hero from "./Hero";
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
      {/* Services */}
      <Services />
      {/* Resources */}
      <Resources />
    </main>
  );
};
export default Home;
