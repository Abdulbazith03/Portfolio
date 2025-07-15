import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import java from '../assets/java.png'
import spring from '../assets/spring.png'
import './port.css'
const Skill = () => {
    const skills = [
        { id: 1, name: "HTML", icon: html },
        { id: 2, name: "CSS", icon: css },
        { id: 3, name: "JavaScript", icon: js },
        { id: 4, name: "React", icon: react },
        { id: 5, name: "Java", icon: java },
        { id: 6, name: "Spring Boot", icon: spring },
    ];
    return (
        <div id='skills' className="skill-section container-fluid text-white py-5">
            <div className="text-center mb-5">
                <h1 className="skill-title">Skill</h1>
            </div>

            <div className="row justify-content-center">
                {skills.map((skill) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center mb-4" key={skill.id}>
                        <div className="skill-card text-center position-relative">
                            <span className="skill-number">{skill.id}</span>
                            <img src={skill.icon} alt={skill.name} />
                            <button className="skill-btn">{skill.name}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Skill;
