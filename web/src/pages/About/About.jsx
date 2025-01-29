import { aboutUsDetails } from "./about-details";
import Goals from "./Goals";
import HelpUs from "./HelpUs";
import Hero from "./Hero";
import Mission from "./Mission";
import Team from "./Team";
import Values from "./Values";

const About = () => {
	return (
		<div>
			<Hero />
			{/* <Mission /> */}
			<Goals />
			{/* <Values /> */}
			<Team />
			<HelpUs />
		</div>
	);
};
export default About;

// return (
//   <div className="mt-6">
//         <h2 className="text-3xl font-bold text-center md:text-left">
//           Company Overview
//         </h2>
//       </div>
//       {aboutUsDetails.map((sect, i) => (
//         <section key={i}>
//           <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
//               <div>
//                 <div className="max-w-lg md:max-w-none">
//                   <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
//                     {sect.heading}
//                   </h2>

//                   <p className="mt-4 text-gray-700">{sect.detail}</p>
//                 </div>
//               </div>

//               <div>
//                 <img src={sect.imgLink} className="rounded" alt="" />
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}
// )
