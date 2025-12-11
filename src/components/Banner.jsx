function Banner() {
  return (
    <div className="hero">
      <div className="hero-background">
        <div className="hero-image-overlay"></div>
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge animate-fade-up">
          Chương VI · Triết học Mác - Lênin
        </div>
        <h1 className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Tôn Giáo Trong Thời Kỳ Quá Độ
          <br />
          Lên Chủ Nghĩa Xã Hội
        </h1>
        <p
          className="subtitle animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Nhìn nhận tôn giáo một cách biện chứng: tôn trọng quyền tự do tín
          ngưỡng, đồng thời gắn giải quyết vấn đề tôn giáo với phát triển kinh
          tế - xã hội và đoàn kết dân tộc.
        </p>
        <div
          className="hero-stats animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="stat">
            <span className="stat-number">Vấn đề Dân tộc & Tôn giáo</span>
            <span className="stat-label">
              Quan điểm Chủ nghĩa Mác - Lênin
            </span>
          </div>
          <div className="stat">
            <span className="stat-number">5 Yếu Tố</span>
            <span className="stat-label">Cấu trúc tôn giáo</span>
          </div>
          <div className="stat">
            <span className="stat-number">4 Nguyên Tắc</span>
            <span className="stat-label">Giải quyết vấn đề tôn giáo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;