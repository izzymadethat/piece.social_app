import Hero from "./Hero";
import Resources from "./Resources";
import Services from "./Services";
import TheChallenge from "./TheChallenge";
import WhatIsPieceSocial from "./WhatIsPieceSocial";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* What is Piece Social? */}
      <WhatIsPieceSocial />
      {/* The Current Challenge */}
      <TheChallenge />
      {/* Services */}
      <Services />
      {/* Resources */}
      {/* <Resources /> */}
    </main>
  );
};
export default Home;
