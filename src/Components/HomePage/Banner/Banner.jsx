import "./Banner.css";
import img from "../../../assets/banner.png";

function Banner() {
  return (
    <div className="banner-section">
      <img src={img} alt="" className="img" />
      <div className="content">
        <h1>Learn New Technologies</h1>
        <p>
          Taking online courses is a great way to learn new technologies. There
          are a plethora of courses available on platforms like Coursera, Udemy,
          and edX. These courses are often self-paced, allowing you to learn at
          your own pace, and many of them offer certification upon completion.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}
export default Banner;
