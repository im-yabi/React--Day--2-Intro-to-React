import React, { useState } from "react";

const PriceCard = ({ plan }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOption = (option) => {
    setSelected(option);
    setShowOptions(false);
    if (option === "Recharge") {
      setShowModal(true);
    }
  };

  const handleRecharge = (e) => {
    e.preventDefault();
    alert(`Recharge successful for ${plan.title} plan 🎉`);
    setShowModal(false);
  };

  return (
    <div className={`price-card ${plan.popular ? "highlight" : ""}`}>
      {plan.popular && <div className="popular-badge">Most Popular</div>}

      <h3 className="plan-title">{plan.title}</h3>
      <h2 className="plan-price">
        {plan.price}
        <span className="period">{plan.period}</span>
      </h2>

      <ul className="features-list">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className={feature.available ? "available" : "unavailable"}
          >
            {feature.available ? "✔" : "✖"} {feature.name}
          </li>
        ))}
      </ul>

      {/* 🌟 Button + Options */}
      <div className="option-container">
        <button
          className="plan-btn"
          onClick={() => setShowOptions(!showOptions)}
        >
          {showOptions ? "Close Options" : "Choose Option"}
        </button>

        {showOptions && (
          <div className="options-menu">
            <button
              className="option-item"
              onClick={() => handleOption(`Selected ${plan.title}`)}
            >
              Choose {plan.title}
            </button>
            <button
              className="option-item"
              onClick={() => handleOption("Viewing Details")}
            >
              View Details
            </button>
            <button
              className="option-item"
              onClick={() => handleOption("Recharge")}
            >
              Recharge
            </button>
          </div>
        )}

        {selected && selected !== "Recharge" && (
          <p className="selected-text">{selected}</p>
        )}
      </div>

      {/* 🌟 Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Recharge Plan</h2>
            <p>You are recharging the <b>{plan.title}</b> plan.</p>
            <form onSubmit={handleRecharge}>
              <input
                type="text"
                placeholder="Enter Phone Number"
                required
                className="modal-input"
              />
              <button type="submit" className="modal-btn confirm">
                Confirm Recharge
              </button>
              <button
                type="button"
                className="modal-btn cancel"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceCard;
