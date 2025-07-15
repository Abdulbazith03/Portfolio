import './port.css';
import css from '../assets/css.png';
import js from '../assets/js.png';
import { useState } from 'react';

const projectData = [
  {
    id: 1,
    project_name: 'GOOD NIGHT',
    title: 'Bed Cart',
    description:
      'A profile picture is the image that represents a social media account in all its interactions across a platform.',
    topImage: js,
    bottomImage: css,
    link: 'https://abdulbazith03.github.io/Bed/',
  },
    {
    id: 2,
    project_name: 'E-Commerce',
    title: 'Shooping',
    description:
      'Developed a fully functional e-commerce website using HTML, CSS, Bootstrap, and JavaScript. The website features a clean and responsive user interface where users can browse products, filter by categories, search for items, and manage their shopping cart.',
    topImage: js,
    bottomImage: css,
    link: 'https://abdulbazith03.github.io/E-Commerce/',
  },
];

const Project = () => {
 const [showBottom, setShowBottom] = useState(null);

  const handleClick = (id) => {
    setShowBottom(id); 
    
    setTimeout(() => {
      setShowBottom(false);
    }, 2000);
  };

  return (
    <div id='projects' className="project-container container-fluid">
      <h2 className='project-title mb-5 text-center' >Project</h2>
      <div className="row ">
        {projectData.map((p) => (
          <div className="col-md-12" key={p.id}>
            <div className="row">
              <div className="col-md-5">
                <div className="image-container" onClick={() => handleClick(p.id)}>
                  <div className={`card-top ${showBottom  === p.id ? 'move-top' : ''}`}>
                    Project : {p.id}
                  </div>
                  <div
                    className={`card-bottom ${showBottom  === p.id ? 'show-bottom' : ''}`}
                  >
                    {p.project_name}
                  </div>
                </div>
              </div>
              <div className="col-md-7 project-content">
                <h2 className='p-title'>Project  : {p.title}</h2>
                <p>{p.description}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <button className="link-button">Explore</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
