import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">GO CHECKIn</h3>
            <p className="footer-description">
              Transforming hotel operations with intelligent automation and
              seamless guest experiences.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                📘
              </a>
              <a href="#" className="social-link">
                🐦
              </a>
              <a href="#" className="social-link">
                💼
              </a>
              <a href="#" className="social-link">
                📷
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Solutions</h4>
              <ul>
                <li>
                  <a href="#">Small Hotels</a>
                </li>
                <li>
                  <a href="#">Hotel Chains</a>
                </li>
                <li>
                  <a href="#">Resorts</a>
                </li>
                <li>
                  <a href="#">B&B</a>
                </li>
                <li>
                  <a href="#">Hostels</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Webinars</a>
                </li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 GO CHECKIn. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>

          <div className="footer-contact">
            <p>Made with ❤️ in India</p>
            <p>support@gocheckin.com | +91 98765 43210</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
