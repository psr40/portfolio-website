import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Empowering Possibilities with Proficiency</h5>
      <h2>Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__skills">
          <h3>Skills</h3>
          <div className="experience__content">
            {/* Programming Languages */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Programming Languages:{" "}
                  <small className="text-light">Java, C, Python</small>
                </h4>
              </div>
            </article>

            {/* Backend Technologies */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Backend Technologies:{" "}
                  <small className="text-light">
                    J2EE, Spring Framework (Spring Boot, Spring MVC, Spring
                    Data), RESTful APIs, Multithreading
                  </small>
                </h4>
              </div>
            </article>

            {/* Automated Testing */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Automated Testing:{" "}
                  <small className="text-light">JUnit, Mockito</small>
                </h4>
              </div>
            </article>

            {/* Web Technologies */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Web Technologies:{" "}
                  <small className="text-light">
                    JavaScript, Node.js, React, React Native, HTML, CSS
                  </small>
                </h4>
              </div>
            </article>

            {/* Database Technologies */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Database Technologies:{" "}
                  <small className="text-light">MySQL, Oracle</small>
                </h4>
              </div>
            </article>

            {/* Version Control */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Version Control:{" "}
                  <small className="text-light">Git, SVN</small>
                </h4>
              </div>
            </article>

            {/* Agile Methodologies */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Agile Methodologies:{" "}
                  <small className="text-light">SCRUM, Kanban</small>
                </h4>
              </div>
            </article>

            {/* Build Tools */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Build Tools:{" "}
                  <small className="text-light">Maven, Gradle</small>
                </h4>
              </div>
            </article>

            {/* Collaboration Tools */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Collaboration Tools:{" "}
                  <small className="text-light">JIRA, Slack</small>
                </h4>
              </div>
            </article>

            {/* Other */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Other Tools:{" "}
                  <small className="text-light">
                    Postman, Talend, MS Excel, MS Powerpoint, MS Word
                  </small>
                </h4>
              </div>
            </article>

            {/* Interests */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>
                  Interests:{" "}
                  <small className="text-light">
                    UI/UX Design, API Design, Android Development, API
                    Development, Web Development
                  </small>
                </h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
