import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
    const ContactData = [
        { icon: FaLinkedin, color: "#0077b5", url: "https://www.linkedin.com/in/abdul-bazith-9636872a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { icon: FaGithub, color: "#ffffff", url: "https://github.com/abdulbazith03" },
        { icon: SiGmail, color: "#ea4335", url: "mailto:abdulbazith003@gmail.com" },
        { icon: FaXTwitter, color: "#1da1f2", url: "https://twitter.com/your_twitter" },
        { icon: FaInstagram, color: "#e1306c", url: "https://www.instagram.com/your_instagram" },
        { icon: FaFacebook, color: "#1877f2", url: "https://www.facebook.com/your_facebook" },
    ];

    return (
        <div id="contact" className="contact-section container">
            <h2 className="textCenter contact-title mb-5">Contact</h2>
            <div className="row justify-content-center">
                {ContactData.map((co, index) => (
                    <div className="col-md-4 col-sm-6 icon-circle" key={index}>
                        <a href={co.url} target="_blank" rel="noopener noreferrer">
                            <div className={`icon-box ${index}`}>
                                <div className="icon-wrapper">
                                    <co.icon size={40} color={co.color} />
                                </div>
                                <div className={`glow reflection-${index}`}></div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Contact;
