const quotes = [
  "Practice makes progress.",
  "Small steps every day.",
  "Learning never stops.",
  "Consistency is the key.",
  "Focus on improvement."
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
}
