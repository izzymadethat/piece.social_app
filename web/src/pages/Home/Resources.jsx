import { resources } from "../../utils/resources";

const Resources = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {resource.description}
              </p>
              <a
                href={resource.link}
                className="block mt-4 text-center text-primary-500 font-medium hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Resources;
