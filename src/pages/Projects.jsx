import CardSlider from "../components/CardSlider";

const Projects = () => {
  return (
    <>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-10 sm:mb-16 md:mb-20 text-purple-700">
        Projects
      </h2>
      <div
        className="preview bg-base-100 rounded-b-box rounded-t-box flex min-h-[20rem] sm:min-h-[10rem] md:min-h-[30rem]
        min-w-[18rem] sm:min-w-[22rem] md:min-w-[24rem] max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto flex-wrap 
        items-center justify-center gap-4 sm:gap-6 md:gap-8 overflow-hidden bg-cover bg-top p-4 border"
      >
        <div className="carousel rounded-box w-full">
          <CardSlider />
        </div>
      </div>
    </>
  );
};

export default Projects;
