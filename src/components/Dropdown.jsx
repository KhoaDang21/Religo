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
            {isOpen && <p className="accordion-body">{item.content}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default Dropdown;