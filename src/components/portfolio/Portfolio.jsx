import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Travel Easy",
    github: "https://github.com/psr40/Travel-Easy",
    description:
      "Designed and constructed a flexible system to book a flight and hotel. Led the development of hotel booking functionality where users can search the hotel based on location, reserve the hotel, and can give the reviews as well.",
  },
  {
    id: 2,
    image: IMG2,
    title: "TuneStream",
    github: "https://github.com/psr40",
    description:
      "Developed and executed the TuneStream project, a relational database system optimized for efficiently managing music catalogs and user accounts within a music streaming service.Designed a comprehensive database schema encompassing tables for organizing music metadata (songs, albums, artists, genres), as well as user account management and playlist organization.Implemented complex query support for effective music metadata retrieval, user playlist curation, and listening history maintenance.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Academic Projects</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="text-light portfolio__desc">
                <p>{description}</p>
              </div>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
