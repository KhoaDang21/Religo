import { useState } from "react";

function Dropdown({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, idx) => {
        const isOpen = idx === openIndex;
        return (
          <div
            key={item.title}
            className={`accordion-item ${isOpen ? "open" : ""}`}
            onClick={() => setOpenIndex(isOpen ? -1 : idx)}
          >
            <div className="accordion-header">
              <span>{item.title}</span>
              <div className="pill">{isOpen ? "–" : "+"}</div>
            </div>
            {isOpen && (
              <div className="accordion-body">
                {item.image && (
                  <div className="accordion-image-wrapper">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="accordion-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="card-image-placeholder" style={{ display: 'none' }}>
                      <span className="placeholder-icon">🖼️</span>
                      <span className="placeholder-text">Hình ảnh</span>
                    </div>
                  </div>
                )}
                <p>{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Dropdown;