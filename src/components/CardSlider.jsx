import soca from "../assets/soca.png";
import lib from "../assets/comlib.png";
import fprojects from "../assets/lms1.png";

function CardSlider() {
  const projects = [
    {
      image: soca,
      title:
        "SOCA: AI-Powered Task Management System with Generative Text for Automated Subtask Generation",
      desc: "This is a website that can manage your every day task and chunk the task in manageable subtasks and suggest task to be done for user. The website has login and registration authentication with gmail. User can add, edit, remove and mark as done the tasks.",
      links: "soca.com",
    },
    {
      image: lib,
      title: "Library Course-Based Computer Usage Monitoring System",
      desc: "Developed a user monitoring system specifically for the library's computer section. This system tracks the number of computer users based on their enrolled courses, providing valuable insights into departmental resource utilization. The system exports this data as spreadsheets for easy analysis and reporting.",
      links: "soca.com",
    },
    {
      image: fprojects,
      title:
        "Web Development Projects for Management, Audit, Library and Various Systems",
      desc: "Various website frontend development for different systems/websites for bussinesses and clients from freelancing work. This includes web system for library system, management system, audit system, ecommerce website and others.",
      links: "soca.com",
    },
  ];

  return (
    <>
      {projects.map((item, index) => (
        <div className="carousel-item mx-6" key={index}>
          <div className="card glass m-3 w-96 transition-transform duration-500 ease-in-out">
            <figure>
              <img src={item.image} alt="project image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.desc}</p>
              <div className="card-actions justify-end">
                {/* <a href={item.links}>
                  <button className="btn btn-primary">Learn More</button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardSlider;
