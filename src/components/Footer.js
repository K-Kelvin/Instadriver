import "./footer.css";

export default function Footer() {
  return (
    <section className="footer" id="page_footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-2">
            <img
              style={{ marginBottom: 30 }}
              src="https://www.instadriver.co/img/footerlogo.svg"
              alt="..."
            />
          </div>
          <div className="col-md-3 col-sm-6 text-left spacing mb-4">
            <h4 className="service-heading text-left">Useful links</h4>
            <a className="links" href="#a">
              About InstaDriver
              <br />
            </a>
            <a className="links" href="#a">
              Verified Search (For Employers &amp; Drivers)
              <br />
            </a>
            <a className="links" href="#a">
              Top Ad Feature (For Drivers)
            </a>
          </div>
          <div className="col-md-2 col-sm-6 text-left spacing mb-4">
            <h4 className="service-heading text-left">Useful links</h4>
            <a className="links" href="#a">
              Driver Sign In
              <br />
            </a>
            <a className="links" href="#a">
              Driver Sign Up
            </a>
          </div>
          <div className="col-md-2 col-sm-6 text-left spacing mb-4">
            <h4 className="service-heading text-left">Useful links</h4>
            <a className="links" href="#a">
              FAQs
              <br />
            </a>
            <a className="links" href="#a">
              Contact Us
              <br />
            </a>
            <a className="links" href="#a">
              Terms &amp; Conditions
            </a>
          </div>
          <div className="col-md-3 col-sm-6 text-left spacing mb-4">
            <h4 className="service-heading text-left">Social Media</h4>
            <ul id="social_m">
              <li className="list-inline-item">
                <a href="#a">
                  <img
                    src="https://www.instadriver.co/img/facebook.svg"
                    alt="..."
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#a">
                  <img
                    src="https://www.instadriver.co/img/twitter.svg"
                    alt="..."
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#a">
                  <img
                    src="https://www.instadriver.co/img/youtube.svg"
                    alt="..."
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#b">
                  <img
                    src="https://www.instadriver.co/img/instagram.svg"
                    alt="..."
                  />
                </a>
              </li>
            </ul>
            <br />
          </div>
          <div className="col-md-2 col-sm-6 text-left spacing">
            <h4 className="service-heading text-left">Contact Info</h4>
            <a className="links" href="#a">
              saysomething@instadriver.co
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
