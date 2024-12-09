import { useState } from "react";
import "./App.css";

const messages = [
  { text: "Learn React 🏫" },
  { text: "Apply for a job 💼" },
  { text: "Invest your new income 🚀" },
];

function App() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 3) setStep((prev) => prev + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep((prev) => prev - 1);
  }

  return (
    <div className="app">
      <div className="steps">
        <div className={`step ${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`step ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <div className="message">
        Step{step}: {messages[step - 1]?.text}
      </div>
      <div className="buttons">
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default App;
