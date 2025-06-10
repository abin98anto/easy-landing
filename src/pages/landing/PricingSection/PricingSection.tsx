import "./PricingSection.scss";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for small hotels and B&Bs",
      features: [
        "Up to 50 rooms",
        "Basic WhatsApp automation",
        "Guest check-in/out",
        "Email support",
        "Basic analytics",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹7,999",
      period: "/month",
      description: "Ideal for mid-size hotels and resorts",
      features: [
        "Up to 200 rooms",
        "Advanced AI chatbot",
        "Multi-language support",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Staff management tools",
        "Guest feedback system",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large hotel chains and enterprises",
      features: [
        "Unlimited rooms",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom development",
        "API access",
        "Advanced security",
        "Training & onboarding",
      ],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="section">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the perfect plan for your hotel. No hidden fees, cancel
          anytime.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`plan-button ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.name === "Enterprise"
                  ? "Contact Sales"
                  : "Start Free Trial"}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
