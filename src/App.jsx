import { useState } from 'react'

function App() {
  const quotes = [
    "It's not a bug, it's an undocumented feature.",
    "C++ makes it harder to shoot yourself in the foot, but when you do, it blows your whole leg off.",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "JavaScript is the only language that you have to apologize for before you start teaching it.",
    "First, solve the problem. Then, write the code."
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-card">
      <h1 className="title">DevQuote Generator</h1>
      <p className="quote-text">"{currentQuote}"</p>
      
      <button className="quote-button" onClick={generateQuote}>
        Get New Quote
      </button>
    </div>
  )
}

export default App