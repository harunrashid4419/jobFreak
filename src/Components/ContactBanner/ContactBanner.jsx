import images from "../../assets/team.png";

function ContactBanner() {
  return (
    <div className="page-banner">
      <img src={images} alt="Banner Img" className="banner-img" />
      <h1>Contact Me</h1>
    </div>
  );
}
export default ContactBanner;
