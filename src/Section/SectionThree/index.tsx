export const AllInOne = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-indigo-500 py-16 mt-20 text-center">
      <div className="container mx-auto" data-aos="fade-down">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-7xl">
          Descubra a Verdadeira Experiência All-in-One
        </h1>
        <div className="mx-auto mt-12 md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <div
            className="relative"
            style={{ paddingBottom: "75%" }}
            data-aos="fade-up"
          >
            <iframe
              width="860"
              height="690"
              src="https://www.youtube.com/embed/tCDDCmhILKA?si=5mgE7aYxwPXAEjao"
              title="YouTube video player"
              frameBorder="0"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
