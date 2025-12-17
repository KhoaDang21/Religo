import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFlipbookOpen, setIsFlipbookOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key to close flipbook
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFlipbookOpen) {
        setIsFlipbookOpen(false);
      }
    };

    if (isFlipbookOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [isFlipbookOpen]);

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
          <a href="#concept">Quan điểm</a>
          <a href="#structure">Cấu trúc</a>
          <a href="#origin">Nguồn gốc</a>
          <a href="#characteristics">Tính chất</a>
          <a href="#principles">Nguyên tắc</a>
          <a href="#vietnam">Tôn giáo ở VN</a>
        </nav>

        {/* FlipBook button bên phải */}
        <div className="header-right">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <button
            className="flipbook-btn"
            onClick={() => setIsFlipbookOpen(true)}
          >
            <span className="flipbook-icon">📖</span>
            <span className="flipbook-text">FlipBook</span>
            <span className="flipbook-shine"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#concept" onClick={() => setIsMobileMenuOpen(false)}>
          Quan điểm
        </a>
        <a href="#structure" onClick={() => setIsMobileMenuOpen(false)}>
          Cấu trúc
        </a>
        <a href="#origin" onClick={() => setIsMobileMenuOpen(false)}>
          Nguồn gốc
        </a>
        <a href="#characteristics" onClick={() => setIsMobileMenuOpen(false)}>
          Tính chất
        </a>
        <a href="#principles" onClick={() => setIsMobileMenuOpen(false)}>
          Nguyên tắc
        </a>
        <a href="#vietnam" onClick={() => setIsMobileMenuOpen(false)}>
          Tôn giáo ở VN
        </a>
      </div>

      {/* Flipbook Modal */}
      {isFlipbookOpen && (
        <div className="flipbook-modal">
          <div className="flipbook-modal-content">
            <button 
              className="flipbook-close"
              onClick={() => setIsFlipbookOpen(false)}
            >
              ✕
            </button>
            <iframe
              src="https://indd.adobe.com/view/b1f1f306-70fc-417b-9c07-d42f64913530"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="MLN131 FlipBook"
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
