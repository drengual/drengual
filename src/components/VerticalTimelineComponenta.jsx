import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PropTypes from "prop-types";

import creaxon from "../assets/creaxon.png";
import drenLogo from "../assets/dren__logo.png";
import school from "../assets/school-64.png";
import lib from "../assets/library-64.png";

const WorkIcon = ({ src }) => {
  return (
    <div className="work-icon">
      <img src={src} alt="Work Icon" />
    </div>
  );
};

WorkIcon.propTypes = {
  src: PropTypes.string.isRequired,
};

const VerticalTimelineComponenta = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
            padding: "20px", // Adds padding for better spacing
            borderRadius: "8px", // Rounds corners
          }}
          contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
          date="May 2024 - Present"
          dateClassName="date-class" // Optional: Add a class for date if you want to style it
          iconStyle={{ background: "#1d1836", color: "#fff" }}
          icon={<WorkIcon src={creaxon} />} // Ensure that the src is passed properly
        >
          <h3 className="vertical-timeline-element-title">
            Junior Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Creaxon Inc.</h4>

          <ul
            className="timeline-list"
            style={{ paddingLeft: "20px", marginTop: "10px" }}
          >
            <li>
              <strong>Frontend Development:</strong> Created responsive,
              user-friendly interfaces using React.js and Tailwind CSS, ensuring
              a seamless user experience across devices.
            </li>
            <li>
              <strong>Backend Development:</strong> Built and maintained
              server-side logic and API integrations using Node.js to deliver
              robust, scalable web applications.
            </li>
            <li>
              <strong>Web Design:</strong> Designed modern, visually appealing
              layouts and user interfaces focused on usability and aesthetics.
            </li>
            <li>
              <strong>Full Stack Maintenance:</strong> Managed and optimized
              APIs, databases, and full-stack systems, ensuring high performance
              and efficient data flow.
            </li>
            <li>
              <strong>Website Deployment:</strong> Deployed and managed websites
              using industry-standard tools and platforms, ensuring smooth and
              reliable site performance.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
          date="February 2024 - April 2024"
          dateClassName="date-class"
          iconStyle={{ background: "#1d1836", color: "#fff" }}
          icon={<WorkIcon src={drenLogo} />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Project-Based Clients
          </h4>

          <ul
            className="timeline-list"
            style={{ paddingLeft: "20px", marginTop: "10px" }}
          >
            <li>
              <strong>UI Development:</strong> Designed and developed user
              interfaces for various web applications and websites.
            </li>
            <li>
              <strong>Responsive Design:</strong> Built responsive and
              user-friendly experiences across various platforms.
            </li>
            <li>
              <strong>Web Technologies:</strong> Utilized strong skills in web
              technologies to deliver high-quality front-end solutions.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
          date="September 2023 - January 2024"
          dateClassName="date-class"
          iconStyle={{ background: "#1d1836", color: "#fff" }}
          icon={<WorkIcon src={lib} />}
        >
          <h3 className="vertical-timeline-element-title">
            Programmer and IT Support
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Library - CvSU - CCAT Campus
          </h4>

          <ul
            className="timeline-list"
            style={{ paddingLeft: "20px", marginTop: "10px" }}
          >
            <li>
              <strong>IT Support:</strong> Provided comprehensive IT support
              services, troubleshooting computers, internet connectivity, and
              library system issues.
            </li>
            <li>
              <strong>System Development:</strong> Designed and developed an
              executable for the library computer users monitoring system,
              enabling efficient student registration, PC user management, and
              report generation.
            </li>
            <li>
              <strong>Python Development:</strong> Utilized Python to build the
              UI and functions of the system, ensuring streamlined management of
              computer users&apos; access and a smooth workflow for library
              staff.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
            padding: "20px",
            borderRadius: "8px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
          date="October 2018 - January 2019"
          dateClassName="date-class"
          iconStyle={{ background: "#1d1836", color: "#fff" }}
          icon={<WorkIcon src={school} />}
        >
          <h3 className="vertical-timeline-element-title">
            Sales Associates and Technician Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Leoj Computer Center
          </h4>

          <ul
            className="timeline-list"
            style={{ paddingLeft: "20px", marginTop: "10px" }}
          >
            <li>
              <strong>Customer Service:</strong> Interacted with customers,
              providing exceptional service, addressing inquiries, and
              processing transactions accurately and efficiently.
            </li>
            <li>
              <strong>Technical Assistance:</strong> Troubleshot technical
              issues and assisted the lead technician in repairing and
              maintaining equipment and systems.
            </li>
            <li>
              <strong>Record Management:</strong> Maintained accurate records of
              sales, inventory, and technical activities using appropriate
              software tools.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#1d1836", color: "#fff" }}
        />
      </VerticalTimeline>
    </>
  );
};

export default VerticalTimelineComponenta;
