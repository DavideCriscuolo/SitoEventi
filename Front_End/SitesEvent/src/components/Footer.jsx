import "./../css/Footer.css";
import logo from "./../assets/logo.png";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-flower"> </div>{" "}
        <div className="bg-footer">
          <div className="info_footer text-white d-flex justify-content-around align-items-center flex-wrap h-100">
            <div>
              <img className="logo_footer " src={logo} alt="" />
            </div>
            <div>
              {" "}
              <address className="bg-email">info@janasevents.com</address>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
