const ServiceArticle = ({ info }) => {
  return (
    <article className="group">
      <div className="p-4">
        <h2 className="text-xl font-medium text-gray-900">{info.heading}</h2>
        {info.headline && (
          <h3 className="my-2 text-lg italic">{info.headline}</h3>
        )}
        <p
          className="mt-2 line-clamp-4 text-sm/relaxed"
          dangerouslySetInnerHTML={{ __html: info.detail }}
        />

        {info.fact && (
          <div className="my-4">
            <h4 className="font-extrabold">{info.fact}</h4>
          </div>
        )}
      </div>
    </article>
  );
};

export default ServiceArticle;
