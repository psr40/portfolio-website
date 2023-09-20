import React, { useState, Text } from "react";
import "./about.css";
import ME from "../../assets/me2.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import Modal from "react-modal";
import certificate1 from "../../assets/certificate1.png";
import certificate2 from "../../assets/certificate2.png";

Modal.setAppElement("#root"); // Set the root element for accessibility

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false); // State for education modal
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false); // State for certificate modal

  // Define the content for the modal
  const experiences = [
    {
      companyName: "Texas State University + Nueva",
      position: "Graduate Research Assistant",
      year: "Jan 2023 - Present",
      description:
        "•  Spearheaded the development of a specialized meal delivery solution aimed at enhancing the lives of senior citizens, aligning with the user-friendly convenience of platforms like Doordash. \n •  Designed and constructed a resilient, scalable infrastructure to support the seamless delivery of meals to the senior population using Android Studio.\n •  Eager to leverage technological expertise and a passion for addressing real-world challenges to contribute positively to Nueva's mission.\n • Gained proficiency in a range of technologies, including Android Studio, XML, SDKs, React Native, REST APIs",
    },
    {
      companyName: "eQ Technologic",
      position: "Software Engineer",
      year: "Oct 2018 - July 2022",
      description:
        "• Played a pivotal role in diverse data migration and solution upgrade projects, contributing to the successful modernization of systems. \n • Led the development of proof of concepts showcasing Digital thread/MBE and Data federation capabilities using the Data as a Service platform. \n • Demonstrated exceptional technical prowess by automating tasks within the SAP application, significantly reducing end-user efforts.\n • Gained proficiency in a range of technologies, including Java, J2EE technologies, SQL, JavaScript, HTML, Bootstrap, Teamcenter, SAP, and Mendix. Experienced in fine-tuning backend systems to achieve high-scale, lowlatency performance. \n • Proven track record in creating maintainable, testable code bases, including API design and unit testing techniques. Skilled in analyzing and optimizing UI and infrastructure code for efficiency. \n • Engaged in customer interactions, shadowing technical leads during requirement gathering and actively contributing to iterative solution development.\n • Skillfully participated in customer meetings, assisting in requirement gathering, and contributing to feature additions through iterative development. Dedication to crafting systems that prioritize exceptional user experiences. \n • Demonstrated adaptability and effective communication during client interactions",
    },
    // Add more experience objects as needed
  ];

  const education = [
    {
      universityName: "Texas State University",
      degree: "Master's degree, Computer Science",
      year: "Aug 2022 - May 2024",
      cgpa: "3.71/4",
      courseWork:
        "Survey of Software Engineering, Formal Methods in Software Engineering, Networks and Communications, Algorithm Design and Analysis, Database Theory and Design, Software Quality, Machine Learning in Pattern Recognition, Advanced Human Factors in Computer Science, Formal Languages, Distributed Computing.",
    },
    {
      universityName: "COEP Technological University",
      degree: "Bachelor of Technology - BTech, Information Technology",
      concentration: "Information Technology",
      year: "Aug 2014 - May 2018",
      cgpa: "3.00/4",
      courseWork:
        "Data Structures, DBMS, Object-Oriented Programming, System Programming and Operating System, Artificial Intelligence, Algorithms and Complexity, Cloud and Big Platform, Human Computer Interaction",
    },
    // Add more experience objects as needed
  ];

  const certificates = [
    {
      certificateName: "Introduction to Web Development",
      image: certificate1,
    },
    {
      certificateName: "Java Programming",
      image: certificate2,
    },
    // Add more certificate objects as needed
  ];

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEducationModal = () => {
    setIsEducationModalOpen(true);
  };

  const closeEducationModal = () => {
    setIsEducationModalOpen(false);
  };

  const openCertificateModal = () => {
    setIsCertificateModalOpen(true);
  };

  const closeCertificateModal = () => {
    setIsCertificateModalOpen(false);
  };

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card" onClick={openModal}>
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ years of working experience</small>
            </article>

            <article className="about__card" onClick={openEducationModal}>
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <small>Pursuing MS in Computer Science</small>
            </article>

            <article className="about__card" onClick={openCertificateModal}>
              <VscFolderLibrary className="about__icon" />
              <h5>Certification</h5>
              <small>Certified and Ready to Excel</small>
            </article>
          </div>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <div className="close-button" onClick={closeModal}>
              <span className="close-icon">&times;</span>
            </div>

            {/* Modal content */}
            {experiences.map((experience, index) => (
              <div key={index}>
                <h3>{experience.companyName}</h3>
                <div className="position-year">
                  <p className="position">{experience.position}</p>
                  <p className="year">{experience.year}</p>
                </div>
                <div className="description">
                  <ul>
                    {experience.description
                      .split("\n")
                      .map((line, lineIndex) => (
                        <li key={lineIndex}>{line}</li>
                      ))}
                  </ul>
                </div>
                <hr />
              </div>
            ))}
          </Modal>

          {/* Education Modal */}
          <Modal
            isOpen={isEducationModalOpen}
            onRequestClose={closeEducationModal}
            className="modal-content education"
            overlayClassName="modal-overlay"
          >
            <div className="close-button" onClick={closeEducationModal}>
              <span className="close-icon">&times;</span>
            </div>
            {/* Education Modal content */}
            {education.map((edu, index) => (
              <div key={index}>
                <h3>{edu.universityName}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="year"> {edu.year}</p>
                <p className="cgpa">CGPA: {edu.cgpa}</p>
                <p className="coursework">Coursework: {edu.courseWork}</p>
                <hr />
              </div>
            ))}
          </Modal>

          {/* Certificate Modal */}
          <Modal
            isOpen={isCertificateModalOpen}
            onRequestClose={closeCertificateModal}
            className="modal-content certificate"
            overlayClassName="modal-overlay"
          >
            <div className="close-button" onClick={closeCertificateModal}>
              <span className="close-icon">&times;</span>
            </div>
            {/* Certificate Modal content */}
            {certificates.map((cert, index) => (
              <div key={index}>
                <h3>{cert.certificateName}</h3>
                <img src={cert.image} alt={cert.certificateName} />
                <hr />
              </div>
            ))}
          </Modal>

          <p className="bio">
            Experienced Software Engineer known for crafting high-performance
            systems and exceptional user experiences using Java, Spring
            Framework, React, React Native and more. Currently pursuing a
            Master's in Computer Science at Texas State University. Let's
            connect and innovate together!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
