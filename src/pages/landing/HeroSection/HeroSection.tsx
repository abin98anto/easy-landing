"use client";

import type React from "react";
import { useEffect, useState } from "react";
import "./HeroSection.scss";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span>Guest Engagement</span> <span>Made Effortlessly</span>{" "}
            <span>Simple & Digital</span>
          </h1>
          <p className="subtitle">
            Transform your hotel operations with WhatsApp automation. From
            booking to check-out, everything your guests need is just a message
            away.
          </p>
        </div>

        <div className="hero-cta">
          <button className="cta-button">
            🚀 Get Started Now - Free Trial
          </button>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5K+</span>
              <span className="stat-label">Hotels Automated</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-mockup">
            <div
              style={{
                width: "100%",
                height: "400px",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                borderRadius: "20px",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.8)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  right: "20px",
                  height: "60px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px",
                  fontSize: "0.9rem",
                }}
              >
                📊 GO CHECKIn Dashboard - Live Hotel Analytics
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "20px",
                  padding: "100px 40px 40px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "20px",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    📱
                  </div>
                  <div style={{ fontSize: "0.9rem" }}>Mobile Integration</div>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "20px",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    🔄
                  </div>
                  <div style={{ fontSize: "0.9rem" }}>Auto Check-in</div>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "20px",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    🎯
                  </div>
                  <div style={{ fontSize: "0.9rem" }}>Guest Services</div>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    padding: "20px",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    📈
                  </div>
                  <div style={{ fontSize: "0.9rem" }}>Real-time Analytics</div>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-element element-1">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1.2rem" }}>✅</span>
              <span>Guest Checked In</span>
            </div>
          </div>

          <div className="floating-element element-2">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1.2rem" }}>💬</span>
              <span>Track patrons</span>
            </div>
          </div>

          <div className="floating-element element-3">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1.2rem" }}>🤖</span>
              <span>Automated checkin to hotels</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
