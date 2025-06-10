import "./FeatureSection.scss";

const FeatureSection = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Automation",
      description:
        "Intelligent chatbots handle guest inquiries 24/7, reducing staff workload and improving response times.",
    },
    {
      icon: "📱",
      title: "Mobile Integration",
      description:
        "Seamless communication through our mobile app - the platform your guests already use and love.",
    },
    {
      icon: "🔄",
      title: "Automated Check-in/out",
      description:
        "Streamline the check-in and check-out process with automated workflows and digital key delivery.",
    },
    {
      icon: "🎯",
      title: "Personalized Guest Services",
      description:
        "Deliver tailored experiences with smart recommendations and personalized service offerings.",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description:
        "Track guest satisfaction, response times, and operational efficiency with comprehensive dashboards.",
    },
    {
      icon: "🔒",
      title: "Secure & Compliant",
      description:
        "Enterprise-grade security with GDPR compliance and data protection at every level.",
    },
  ];

  return (
    <section className="feature-section section">
      <div className="feature-container">
        <h2 className="section-title">Powerful Features for Modern Hotels</h2>
        <p className="section-subtitle">
          Everything you need to automate guest communication and enhance their
          experience
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="feature-highlight">
          <div className="highlight-content">
            <div className="highlight-text">
              <h3>Ready to Transform Your Hotel Operations?</h3>
              <p>
                Join thousands of hotels already using GO CHECKIn to deliver
                exceptional guest experiences.
              </p>
              <button className="btn-primary">Start Free Trial</button>
            </div>
            <div className="highlight-visual">
              <div className="stats-container">
                <div className="stat-box">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Guest Satisfaction</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">60%</span>
                  <span className="stat-label">Time Saved</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
