import { useEffect } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";

// Data
import {
  structure,
  origins,
  characteristics,
  principles,
  reality,
  policies,
  vnFeatures,
} from "./data/content";

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Header />
      <Banner />

      {/* Các phần nội dung khác */}
      <section className="panel" id="concept">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">
            I. QUAN ĐIỂM CỦA CHỦ NGHĨA MÁC - LÊNIN VỀ TÔN GIÁO
          </div>
          <h2>A. Bản chất, nguồn gốc và tính chất của tôn giáo</h2>
          <p>
            Tôn giáo là một hình thái ý thức xã hội phản ánh hiện thực khách
            quan dưới dạng "phản ánh hư ảo". Con người sáng tạo ra tôn giáo để
            tìm kiếm ý nghĩa, che chở tinh thần, rồi lại chịu sự chi phối của
            nó.
          </p>
        </div>
        <div className="grid two">
          <div className="card deep animate-on-scroll">
            <div className="tagline">Góc độ triết học</div>
            <h3>Phản ánh hư ảo</h3>
            <p>
              "Tất cả mọi tôn giáo chẳng qua chỉ là sự phản ánh hư ảo vào trong
              đầu óc con người của những lực lượng ở bên ngoài chi phối cuộc
              sống hằng ngày của họ, sự phản ánh mà ở đó các lực lượng trần thế
              mang hình thức các lực lượng siêu trần thế." — Ph. Ăngghen
            </p>
          </div>
          <div className="card animate-on-scroll">
            <div className="tagline">Góc độ thực thể xã hội</div>
            <h3>Các tiêu chí cấu thành</h3>
            <ul className="bullet-list">
              <li>
                Niềm tin sâu sắc vào đấng siêu nhiên, tối cao, thần linh để tôn
                thờ.
              </li>
              <li>
                Hệ thống giáo thuyết: giáo lý, giáo luật, lễ nghi phản ánh thế
                giới quan, nhân sinh quan, đạo đức.
              </li>
              <li>Hệ thống cơ sở thờ tự.</li>
              <li>
                Tổ chức nhân sự điều hành việc đạo (chức sắc, nhà tu hành).
              </li>
              <li>Tập hợp tín đồ đông đảo, tự nguyện tin theo.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="panel" id="structure">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">Cấu trúc</div>
          <h2>5 yếu tố của một tôn giáo</h2>
        </div>
        <div className="grid five">
          {structure.map((item, index) => (
            <div
              key={item.title}
              className="card soft animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel" id="origin">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">Nguồn gốc</div>
          <h2>Vì sao tôn giáo hình thành?</h2>
          <p>
            Chủ nghĩa Mác - Lênin chỉ ra 3 nguồn gốc đan xen: kinh tế - xã hội,
            nhận thức và tâm lý.
          </p>
        </div>
        <div className="grid three">
          {origins.map((item, index) => (
            <div
              key={item.title}
              className="card animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="tagline">{item.title}</div>
              <ul className="bullet-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="panel" id="characteristics">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">B. Tính chất của tôn giáo</div>
          <h2>Những đặc trưng nổi bật</h2>
        </div>
        <div className="grid three">
          {characteristics.map((item, index) => (
            <div
              key={item.title}
              className="card deep animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="icon">{item.icon}</div>
              <div className="tagline">{item.title}</div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel" id="principles">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">
            II. Nguyên tắc giải quyết vấn đề tôn giáo trong thời kỳ quá độ lên
            CNXH
          </div>
          <h2>4 Nguyên tắc cơ bản</h2>
          <p>
            Giải quyết vấn đề tôn giáo là quá trình lâu dài, cần sự tế nhị, tôn
            trọng quyền con người và gắn với phát triển kinh tế - xã hội.
          </p>
        </div>
        <div className="animate-on-scroll">
          <Dropdown items={principles} />
        </div>
      </section>

      <section className="panel" id="vietnam">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">
            III. Tôn giáo ở Việt Nam và chính sách tôn giáo của Đảng, Nhà nước
            ta hiện nay
          </div>
          <h2>A. Đặc điểm tôn giáo ở Việt Nam</h2>
          <p>
            Tôn giáo ở Việt Nam đa dạng, đan xen, chung sống hòa bình. Dưới đây
            là đặc điểm và các minh họa chính sách hiện hành.
          </p>
        </div>
        <div className="card highlight animate-on-scroll">
          <h3>Đặc điểm tôn giáo tại Việt Nam</h3>
          <ul className="bullet-list">
            {vnFeatures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="grid adaptive">
          {reality.map((item, index) => (
            <div
              key={item.title}
              className="card soft animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tagline">{item.title}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-head animate-on-scroll">
          <div className="eyebrow">
            B. Chính sách của Đảng, Nhà nước Việt Nam đối với tín ngưỡng, tôn
            giáo hiện nay
          </div>
          <h2>5 Định hướng chính sách</h2>
        </div>
        <div className="policy-flow">
          {policies.map((item, idx) => (
            <div
              key={item.title}
              className="policy-card animate-on-scroll"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="step">0{idx + 1}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;