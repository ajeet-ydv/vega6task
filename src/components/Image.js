const Image = ({ data }) => {
  // console.log(data);
  return (
    <a
      className="group relative "
      href={data.urls.regular}
      target="_blank"
      rel="noreferrer"
    >
      <div className="absolute flex items-center justify-center bg-blue-900 text-white py-2 w-full bottom-0 left-0 right-0 transform -translate-y-2/3 opacity-0 group-hover:opacity-100">
        {" "}
        Add caption{" "}
      </div>
      <img
        className="h-72 w-full object-cover rounded-lg shadow-md"
        src={data.urls.small}
        alt={data.alt_description}
      />
    </a>
  );
};

export default Image;
