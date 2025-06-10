import { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">GO CHECKIn</div>
      <div className="user-links">
        <button>Contact Us</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
