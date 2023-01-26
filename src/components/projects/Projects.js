import './projects.css';
import Project1 from '../../assets/portfolio1.jpg';
import Project2 from '../../assets/portfolio2.jpg';
import Project3 from '../../assets/portfolio3.jpg';
import Project4 from '../../assets/portfolio4.jpg';
import Project5 from '../../assets/portfolio5.png';
import Project6 from '../../assets/portfolio6.jpg';

const Projects = () => {
  const data = [Project1, Project2, Project3, Project4, Project5, Project6];

  return (
    <section className="projects__container" id="projects">
      <h2>Projects</h2>
      <div className="projects__list">
        {data.map((datum, index) => (
          <article className="project__item" key={index}>
            <a href="/">
              <h3>{`Project ${index + 1}`}</h3>
            </a>
            <img src={datum} alt={`project${index}`} />
          </article>
        ))}
      </div>
    </section>
  );
}
 
export default Projects;