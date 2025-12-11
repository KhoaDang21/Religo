import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        {/* Logo bên trái */}
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <span className="logo-text">MLN131 - Chương VI</span>
          </div>
        </div>

        {/* Navigation ở giữa */}
        <nav className="nav-center">
          <a href="#concept">Bản chất</a>
          <a href="#structure">Cấu trúc</a>
          <a href="#origin">Nguồn gốc</a>
          <a href="#characteristics">Tính chất</a>
          <a href="#principles">Nguyên tắc</a>
          <a href="#vietnam">Việt Nam</a>
        </nav>

        {/* FlipBook button bên phải */}
        <div className="header-right">
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          
          <button className="flipbook-btn">
            <span className="flipbook-icon">📖</span>
            <span className="flipbook-text">FlipBook</span>
            <span className="flipbook-shine"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#concept" onClick={() => setIsMobileMenuOpen(false)}>Bản chất</a>
        <a href="#structure" onClick={() => setIsMobileMenuOpen(false)}>Cấu trúc</a>
        <a href="#origin" onClick={() => setIsMobileMenuOpen(false)}>Nguồn gốc</a>
        <a href="#characteristics" onClick={() => setIsMobileMenuOpen(false)}>Tính chất</a>
        <a href="#principles" onClick={() => setIsMobileMenuOpen(false)}>Nguyên tắc</a>
        <a href="#vietnam" onClick={() => setIsMobileMenuOpen(false)}>Việt Nam</a>
      </div>
    </header>
  );
}

export default Header;