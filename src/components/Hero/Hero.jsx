import "./Hero.css";
import profile_img from '../../assets/profile-img.png';
import { Link } from "react-router-dom";


const Hero = () => {
    const handleDownload =()=>{
        const cvURL ="/ResumeTaheniDziri.pdf"
        const link = document.createElement("a")
        link.href =cvURL
        link.download="Taheni_Dziri_cv.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    return (
    
        
        <div className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I am Taheni Dziri , </span> a software engineer .</h1>
            <p>I am a software engineer passionate about solving complex problems and building efficient, high-quality applications. With expertise in software development and system design, I focus on creating innovative solutions that enhance user experiences and optimize performance.</p>
            <div className="hero-action">
            

                <div>
                    <Link className="hero-connect" to="/contact">
                        Connect With Me
                    </Link>
                </div>
                <div>
                    <button onClick={handleDownload} className="hero-resume">My Resume</button>
                </div>
            </div>
        </div>
    
)
}

export default Hero