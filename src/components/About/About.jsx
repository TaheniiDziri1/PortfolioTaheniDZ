import './About.css'
import Profile_img from '../../assets/frameworks.png';



const About = () => {
    return (
    
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img className='image' src={Profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Software Engineer with expertise in Artificial Intelligence, Data Analysis, DevOps, and Software Development. I have strong skills in Python, SQL, Power BI, and cloud technologies, allowing me to design and optimize data-driven solutions.</p>
                    <p>With experience in AI, automation, and full-stack development, I am passionate about building scalable and efficient systems. Constantly learning and adapting, I thrive on solving complex challenges and driving innovation in the tech industry.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><span>HTML & CSS</span><hr style={{ width: "80%" }} /></div>
                    <div className="about-skill"><span>JavaScript </span><hr style={{ width: "80%" }} /></div>
                    <div className="about-skill"><span>React.js</span><hr style={{ width: "90%" }} /></div>
                    <div className="about-skill"><span>Node.js</span><hr style={{ width: "70%" }} /></div>
                    <div className="about-skill"><span>Docker</span><hr style={{ width: "90%" }} /></div>
                </div>
            </div>
        </div>
    </div>
    
)
}

export default About