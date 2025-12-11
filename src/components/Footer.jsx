function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">📚</span>
              <span className="logo-text">MLN131 - Chương VI</span>
            </div>
            <p className="footer-desc">
              Chương VI: Vấn đề Dân tộc và Tôn giáo
              <br />
              Triết học Mác - Lênin • © Group6_3W_MLN131_04_TriLM32
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Nội dung chính</h4>
              <ul>
                <li>
                  <a href="#concept">Bản chất tôn giáo</a>
                </li>
                <li>
                  <a href="#structure">Cấu trúc tôn giáo</a>
                </li>
                <li>
                  <a href="#origin">Nguồn gốc tôn giáo</a>
                </li>
                <li>
                  <a href="#characteristics">Tính chất tôn giáo</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Chính sách</h4>
              <ul>
                <li>
                  <a href="#principles">Nguyên tắc giải quyết</a>
                </li>
                <li>
                  <a href="#vietnam">Tôn giáo ở Việt Nam</a>
                </li>
                <li>
                  <a href="#vietnam">Chính sách Đảng & Nhà nước</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Tài liệu</h4>
              <ul>
                <li>
                  <a href="#">Giáo trình Triết học</a>
                </li>
                <li>
                  <a href="#">Tài liệu tham khảo</a>
                </li>
                <li>
                  <a href="#">Bài giảng MLN131</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2025 Group6_3W_MLN131_04_TriLM32. Được thiết kế cho môn
            Triết học Mác - Lênin. Dựa trên giáo trình chính thức.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;