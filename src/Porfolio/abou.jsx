import './port.css'
import img from '../assets/bazith.jpeg'

const About = () => {
    return (
        <div id='about' className="about-secction container my-5">
            <div className="row">
                <div className="col-md-12 text-center mb-4">
                    <h1 className="about-title">About Me</h1>
                </div>
                <div className="col-md-6 text-center mt-5">
                    <img src={img} alt="About Me" className="img-fluid rounded" />
                </div>
                <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center ">
                    <p>
                         I am Abdul Bazith, a professional Web Developer with a passion for
                         building responsive and dynamic web applications. With extensive
                         experience in HTML, CSS, JavaScript, and frameworks like React, I
                         am committed to delivering high-quality web solutions for my clients.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default About;
