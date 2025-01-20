const ServiceArticle = ({ info }) => {
  return (
    <article className="group">
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{info.heading}</h3>

        <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed">
          {info.detail}
        </p>
      </div>
    </article>
  );
};

export default ServiceArticle;
