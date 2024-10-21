import VerticalTimelineComponenta from "../components/VerticalTimelineComponenta";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-transparent mt-24">
      <h1 className="text-6xl font-bold text-center mb-20 text-purple-700">
        About Me
      </h1>

      <p className="text-lg text-gray-200 text-center mb-16 m-auto sm:px-0">
        Passionate and forward-thinking web developer dedicated to staying at
        the forefront of technology trends. Committed to continuous learning,
        eagerly explore new frameworks, libraries, and tools to enhance my skill
        set and deliver innovative solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card p-8 rounded-lg shadow-md backdrop-blur-sm border-4 border-transparent border-b-purple-500 border-r-purple-400 border-l-purple-300 border-t-purple-200 transition-transform duration-500 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            Front-End Development
          </h2>
          <p className="text-gray-200">
            Front-end web development adopting new frameworks to satisfy
            changing needs and keep up with trends. Ensuring browser
            compatibility, visually appealing and user-friendly interfaces.
          </p>
        </div>

        <div className="card p-8 rounded-lg shadow-md backdrop-blur-sm border-4 border-transparent border-b-purple-500 border-r-purple-400 border-l-purple-300 border-t-purple-200 transition-transform duration-500 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            Responsive Design
          </h2>
          <p className="text-gray-200">
            Implement responsive design principles, ensuring that websites and
            web applications adapt seamlessly to different devices and screen
            sizes for an optimal user experience.
          </p>
        </div>

        <div className="card p-8 rounded-lg shadow-md backdrop-blur-sm border-4 border-transparent border-b-purple-500 border-r-purple-400 border-l-purple-300 border-t-purple-200 transition-transform duration-500 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">
            Back-End Development
          </h2>
          <p className="text-gray-200">
            Back-end development leveraging modern approaches, ensuring
            scalability, security, and seamless communication with front-end
            interfaces, meeting the evolving needs of today&apos;s web
            applications.
          </p>
        </div>
      </div>

      <div className="mt-36">
        <h2 className="text-6xl font-bold text-center mb-20 text-purple-700">
          Work Experience
        </h2>
        <VerticalTimelineComponenta />
      </div>
    </div>
  );
};

export default About;
