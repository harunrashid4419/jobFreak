import images from "../../../assets/team.png";
import "./PageBanner.css";

function PageBanner() {
  return (
    <div className="page-banner">
      <img src={images} alt="Banner Img" className="banner-img" />
      <h1>About Me</h1>
    </div>
  );
}
export default PageBanner;
