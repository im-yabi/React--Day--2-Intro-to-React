import React from "react";
import PriceCard from "./components/PriceCard";
import "./index.css";

const plans = [
  {
    title: "FREE",
    price: "$0",
    period: "/month",
    popular: false,
    features: [
      { name: "Single User", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: false },
      { name: "Dedicated Phone Support", available: false },
      { name: "Free Subdomain", available: false },
      { name: "Monthly Status Reports", available: false }
    ]
  },
  {
    title: "PLUS",
    price: "$9",
    period: "/month",
    popular: true,
    features: [
      { name: "5 Users", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free Subdomain", available: true },
      { name: "Monthly Status Reports", available: false }
    ]
  },
  {
    title: "PRO",
    price: "$49",
    period: "/month",
    popular: false,
    features: [
      { name: "Unlimited Users", available: true },
      { name: "50GB Storage", available: true },
      { name: "Unlimited Public Projects", available: true },
      { name: "Community Access", available: true },
      { name: "Unlimited Private Projects", available: true },
      { name: "Dedicated Phone Support", available: true },
      { name: "Free Subdomain", available: true },
      { name: "Monthly Status Reports", available: true }
    ]
  }
];

function App() {
  return (
    <div className="app-container">
      <h1 className="heading">Choose Your Plan</h1>
      <p className="sub-heading">Simple and transparent pricing</p>
      <div className="cards-container">
        {plans.map((plan, index) => (
          <PriceCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default App;
