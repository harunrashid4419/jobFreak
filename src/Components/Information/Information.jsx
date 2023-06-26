import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import img from "../../assets/photo of Md. Harun Or Rashid.jpg";
import "./Information.css";
import Footer from "../HomePage/Footer/Footer";
import PageBanner from "../HomePage/PageBanner/PageBanner";

function Information() {
  return (
    <>
      <PageBanner />
      <div className="main-info">
        <div className="information-section">
          <div className="left">
            <img src={img} alt="About Images" />
          </div>
          <div className="right">
            <h1>About Us</h1>
            <h4>MD. Harun Or Rashid</h4>
            <p>
              Hello, I am a MERN stack developer. And I am a skilled and
              passionate web developer in creating dynamic and user-friendly
              websites. My expertise lies in front-end development. I thrive on
              turning design concepts into pixel-perfect, responsive websites
              that deliver an exceptional user experience. I completed some solo
              projects and one team project. And I was the leader of our team
              project. For completed my team project I know about teamwork and
              GitHub collaborations. Thank you for taking the time to visit my
              profile. I look forward to connecting with fellow professionals,
              exploring new opportunities, and making meaningful contributions
              to the web development community.
            </p>
          </div>
        </div>
        <div className="social-icon">
          <p>Social Login</p>
          <div className="icons">
            <a target="_black" href="https://github.com/harunrashid4419">
              <FaGithub />
            </a>
            <a
              target="_black"
              href="https://www.facebook.com/mdharun.orrashid.79827"
            >
              <FaFacebookF />
            </a>
            <a
              target="_black"
              href="https://www.linkedin.com/in/md-harun-or-rashid2/"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Information;
