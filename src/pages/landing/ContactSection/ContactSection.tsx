import type React from "react";
import { useState } from "react";
import "./ContactSection.scss";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hotelName: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-section section">
      <div className="contact-container">
        <h2 className="section-title">Get Started Today</h2>
        <p className="section-subtitle">
          Ready to transform your hotel operations? Contact us for a
          personalized demo.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Why Choose GO CHECKIn?</h3>
            <div className="info-list">
              <div className="info-item">
                <span className="info-icon">🚀</span>
                <div>
                  <h4>Quick Setup</h4>
                  <p>
                    Get up and running in less than 24 hours with our expert
                    onboarding team.
                  </p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💬</span>
                <div>
                  <h4>24/7 Support</h4>
                  <p>
                    Our dedicated support team is always available to help you
                    succeed.
                  </p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📈</span>
                <div>
                  <h4>Proven Results</h4>
                  <p>
                    Join 5000+ hotels that have improved their guest
                    satisfaction by 95%.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-details">
              <h4>Contact Information</h4>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>support@gocheckin.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="hotelName">Hotel Name *</label>
                <input
                  type="text"
                  id="hotelName"
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your hotel and requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Request Demo
              </button>

              <p className="form-note">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
