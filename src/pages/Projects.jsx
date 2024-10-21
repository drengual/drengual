import CardSlider from "../components/CardSlider";

const Projects = () => {
  return (
    <>
      <h2 className="text-6xl font-bold text-center mb-20 text-purple-700">
        Projects
      </h2>
      <div
        className="preview bg-base-100 rounded-b-box rounded-t-box flex min-h-[30rem] 
      min-w-[20rem] max-w-7xl mx-auto flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover 
      bg-top p-4  [border-width:var(--tab-border)]"
      >
        <div className="carousel rounded-box ">
          <CardSlider />
        </div>
      </div>
    </>
  );
};

export default Projects;
